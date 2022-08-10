import React from "react"
import "bulma"
import { Helmet } from "react-helmet"
import TopNav from "../components/Navbar"
import Footer from "../components/Footer"

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>404 Not Found | AmariBackgrounds</title>
      </Helmet>

      <TopNav />

      <div style={{ height: "100px" }} />

      <h1 className="is-1 title white" style={{ textAlign: "center" }}>
        404 Not Found
      </h1>

      <p style={{ textAlign: "center" }}>
        The requested resource has been moved, deleted, or never existed in the first place. Could it be a typo?
        <br />
        If you came here from a link on this website, please report this bug in our Discord server. Sorry for any inconveniences caused.
      </p>

      <div style={{ height: "100px" }} />

      <Footer />
    </div>
  )
}

export default NotFound
