import React from "react"
import "bulma"
import "../App.css"
import { Helmet } from "react-helmet"
import TopNav from "../components/Navbar"
import Footer from "../components/Footer"
import { useHistory } from "react-router-dom"

import { saveAs } from "file-saver"

const View = ({ match }) => {
  let history = useHistory()
  const download = (url) => {
    saveAs(url, "download.png") // Put your image url here.
  }
  return (
    <div>
      <Helmet>
        <title>Image Preview | AmariBackgrounds</title>
      </Helmet>

      <TopNav />

      <div style={{ textAlign: "center" }}>
        <br />
        <br />

        {match.params.id ? <img width="80%" className={"pb-5"} alt="Preview" src={`https://res.cloudinary.com/theshadowdev/image/upload/v1635883256/amaribackgrounds/${match.params.id}.png`}></img> : <p>No image selected</p>}

        <br />

        <button onClick={() => download(`https://res.cloudinary.com/theshadowdev/image/upload/v1635883256/amaribackgrounds/${match.params.id}.png`)} className="mt-1 button is-amariYellow is-large home-button">
          Download
        </button>
        <button onClick={() => history.goBack()} className="mt-1 button is-amariYellow is-large home-button">
          Back
        </button>
      </div>

      <Footer />
    </div>
  )
}

export default View
