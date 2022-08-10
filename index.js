require("dotenv").config()
const express = require("express")
const path = require("path")
const app = express()
const { json } = require("body-parser")
app.use(json())

const cloudinary = require("cloudinary")
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

const { Client, Util, MessageEmbed } = require("discord.js")
const client = new Client({ intents: ["GUILD_MESSAGES", "GUILDS", "GUILD_MEMBERS"] })

const config = {
  guild: "778894052799545355",
  staff: "816054426615152661",
  prefix: "ab!",
  logs: "899428253847138305",
}

const api = express.Router()

api.get("/", (req, res) => {
  res.sendStatus(200)
})

api.get("/folder", async (req, res) => {
  let root = await cloudinary.v2.api.root_folders()
  res.json(root)
})

api.get("/tags", async (req, res) => {
  let tagData = await cloudinary.v2.api.tags()
  res.json(tagData.tags)
})

// api.post("/addtag", async (req, res) => {
//   let done = await cloudinary.v2.uploader.add_tag(req.body.tag, req.body.image, {})
//   res.json(done)
// })

api.get("/backgrounds", async (req, res) => {
  let bg
  if (req.query.tag) {
    bg = await cloudinary.v2.api.resources_by_tag(req.query.tag, { tags: true, metadata: true, context: true, max_results: 500 })
  } else {
    bg = await cloudinary.v2.api.resources({ tags: true, metadata: true, context: true, max_results: 500 })
  }
  let sendData = []
  bg.resources.forEach((x) => {
    if (x.public_id.startsWith("amaribackgrounds")) {
      sendData.push(req.query.raw ? x : { name: x.public_id.replace("amaribackgrounds/", ""), url: x.secure_url, format: x.format, tags: x.tags, title: x.context?.custom?.caption })
    }
  })
  res.json(sendData)
})

api.get("/staff", async (req, res) => {
  let staffIds = client.guilds
    .resolve(config.guild)
    .members.cache.filter((x) => x.roles.cache.has(config.staff))
    .map((x) => x.id)
  res.json(staffIds)
})

app.use("/api", api)

app.use(express.static(path.join(__dirname, "client/build")))
app.use(express.static(path.join(__dirname, "public")))

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

app.listen(process.env.PORT)
console.log("AmariBackgrounds has been started, port " + process.env.PORT)

client.on("ready", () => {
  if (process.env.TERM_PROGRAM != "vscode") webLog(`Process start complete: https://amaribackgrounds.theshadow.xyz\n\`\`\`diff\n- Port: ${process.env.PORT}\n- User: ${client.user.tag}${process.env.RAILWAY_GIT_COMMIT_MESSAGE ? `\n- Commit: ${process.env.RAILWAY_GIT_COMMIT_MESSAGE} (${process.env.RAILWAY_GIT_COMMIT_SHA})` : ""}\`\`\``)
  console.log("Discord is connected, using " + client.user.tag)
})

client.on("messageCreate", async (message) => {
  console.log(message.content)
  const args = message.content.slice(config.prefix.length).split(/ +/)
  const commandName = args.shift().toLowerCase()
  if (commandName == "eval") {
    if (!["439223656200273932"].includes(message.author.id)) return
    try {
      if (!args[0]) return message.channel.send("undefined", { code: "js" })

      let codeArr = args.slice(0).join(" ").split("\n")
      if (!codeArr[codeArr.length - 1].startsWith("return")) codeArr[codeArr.length - 1] = `return ${codeArr[codeArr.length - 1]}`

      const code = `async () => { ${codeArr.join("\n")} }`

      let out = await eval(code)()

      message.channel.send(`Typeof output: **${typeof out}**`)
      if (typeof out !== "string") out = require("util").inspect(out)
      out = out.replace(process.env.TOKEN, "[TOKEN REDACTED]").replace(process.env.CLOUDINARY_SECRET, "[CLOUDINARY_SECRET REDACTED]")

      message.channel.send({
        content: out ? out : "null",
        split: true,
        code: "js",
      })
    } catch (err) {
      message.channel.send("An error occurred when trying to execute this command.")
      console.log(err)
      return message.channel.send(`${err}`, { code: "js" })
    }
  }
})

client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    if (interaction.commandName == "view") {
      let tag = interaction.options.getString("tag")
      let embed = new MessageEmbed()
        .setDescription(`Find ${tag ? `${tagCase(tag)} ` : "many kinds of "}backgrounds for your AmariBot rank card on AmariBackgrounds, a collection of over 200 backgrounds for AmariBot!`)
        .setTitle(`${tag ? tagCase(tag) : "All"} Backgrounds`)
        .setURL(`https://amaribackgrounds.theshadow.xyz/backgrounds${tag ? `/${tag.replace(/ /g, "%20")}` : ""}`)
        .setThumbnail(client.user.avatarURL())
      interaction.reply({ embeds: [embed] })
    }
  }

  if (interaction.isAutocomplete()) {
    if (interaction.commandName == "view") {
      let query = interaction.options.getString("tag").toLowerCase()
      let tagData = await cloudinary.v2.api.tags()
      let response = []
      tagData.tags.forEach((x) => {
        if (!x.toLowerCase().startsWith(query)) return
        response.push({ name: `${tagCase(x)}`, value: x })
      })
      interaction.respond(response)
    }
  }
})

setTimeout(
  () => {
    client.login(process.env.TOKEN)
  },
  process.env.TEST == "yes" ? 20000 : 1000
)

const webLog = (msg) => {
  client.channels.cache.get(config.logs).send({ content: Util.cleanContent(msg) })
}

const tagCase = (tag) => {
  return tag.charAt(0).toUpperCase() + tag.slice(1)
}
