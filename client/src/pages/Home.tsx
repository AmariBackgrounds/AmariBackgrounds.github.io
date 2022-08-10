import React from "react"
import "bulma"
import "../App.css"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import TopNav from "../components/Navbar"
import { Link } from "react-router-dom"

const Home = () => {
    //const [projectData, setProjectData] = React.useState<any>(undefined);

    return (
        <div>
            <Helmet>
                <title>Home | AmariBackgrounds</title>
                <meta name="theme-color" content="#70503C" media="(prefers-color-scheme: dark)"></meta>
            </Helmet>

            <TopNav />

            <div style={{ maxWidth: "60rem", margin: "auto", textAlign: "center"}}>
                <br />
                <br />

                <h1 className="is-1 title">
                    <figure className="image" style={{ width: "256px", display: "inline-block", verticalAlign: "middle" }}>
                        <img src="/AmariSmol.png" alt="AmariSmol Logo" />
                    </figure>
                    <br />
                    <span style={{ marginRight: "20px" }} />
                    <span style={{color: "white"}}>AmariBackgrounds</span>
                </h1>

                <p>
                    AmariBackgrounds is a collection of backgrounds for AmariBot. We have over 200 Backgrounds and we get more almost everyday! Join our AmariBackground Discord Server below to submit your own!
                </p>

                <br />

                <a href="https://discord.gg/ns7JvKdD4h" target="_blank" rel="noreferrer" className="mt-1 button is-amariYellow is-large home-button">
                    Join Server
                </a>
                <Link to="/backgrounds" className="mt-1 button is-amariYellow is-large home-button">
                    View Backgrounds
                </Link>

                <div style={{ height: "100px" }}></div>

                {/* <h4 className="is-4 title">
          Other Team Utopium Projects
        </h4>

        <div className="columns is-centered">
          {
            projectData?.length ?
            projectData.map((p: any) => (
              <div className="column is-4">
                <div className="box">
                  <figure className="image is-64x64" style={{ display: 'inline-flex' }}>
                    <img src={p.logoUrl} alt={`${p.name} Logo`} className="is-rounded" />
                  </figure>
                  
                  <p style={{ paddingBottom: '5px' }}>
                    <strong>{p.name}</strong>
                  </p>

                  <div className="tags is-centered">
                    {p.tags.map((tag: string) => (
                      <span className="tag is-info is-light">{tag}</span>
                    ))}
                  </div>

                  <small>{p.description}</small>

                  <div />

                  <small className="content is-small has-text-grey">{p.active ? 'Currently in development' : 'Development temporarily paused'}</small>
                </div>
              </div>
            )) : projectData === null ? (
              <div>
                <p className="has-text-danger">
                  Failed to fetch projects data
                </p>
              {process.env.REACT_APP_ENVIRONMENT === 'development' ? (
                <small className="content is-small has-text-grey">
                  It seems like you're in development. This issue is probably occuring because of
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" rel="noopener noreferrer"> CORS policy</a>. This message will not appear in production.
                  <br />
                  Note: This is a <em>browser feature</em>, the website code does not need updating or change.
                </small>
              ) : ''}
              </div>
            ) : (
              <p>
                Loading projects data...
              </p>
            )
          }
        </div> */}
            </div>

            <Footer />
        </div>
    )
}

export default Home
