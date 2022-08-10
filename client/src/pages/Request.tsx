import React from "react"
import "bulma"
import { Helmet } from "react-helmet"
import TopNav from "../components/Navbar"
import Footer from "../components/Footer"

const Request = () => {
  return (
    <div>
      <Helmet>
        <title>Request Backgrounds | AmariBackgrounds</title>
      </Helmet>

      <TopNav />

      <div style={{ height: "100px" }} />

      <h1 className="is-1 title white" style={{ textAlign: "center" }}>
        Request Backgrounds
      </h1>

      <p style={{ textAlign: "center" }}>
        Are you in need of a background that does not exist on AmariBackgrounds?
        <br />
        Request your background in our{" "}
        <a href="https://discord.gg/ns7JvKdD4h" target="_blank" rel="noreferrer">
          Discord server
        </a>
        !<br />
        (To submit a request, please get yourself the Submissions Approval role first, you can find how to get it in the rules.)
        <br />
        <br />
        Give us all your information for the background you want, for example:
        <ul>
          <li>• Background picture or a plain color</li>
          <li>• Colored boxes to highlight items on your rank card</li>
        </ul>
        <br />
        We will then review your request and get back to you as soon as possible.
        <br />
        <br />
        By requesting a background you must comply with{" "}
        <a href="https://discord.com/terms" target="_blank" rel="noreferrer">
          Discord's Terms of Service
        </a>
        . Anything that is uploaded is your responsibility and you will be held accountable for it.
        <br />
        The making of your background can take up 2-3 weeks (or less, depends on how many request something), since we don't have that much time for it and do it in our free time.
        <br />
        Every requested finished background will get added on the Amari Backgrounds website.
      </p>

      <div style={{ height: "100px" }} />

      <Footer />
    </div>
  )
}

export default Request
