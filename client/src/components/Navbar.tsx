import React from "react"
import "bulma"
import "../App.css"
import { Link } from "react-router-dom"
import Login from "../functions/Login"
import Logout from "../functions/Logout"
import axios from "axios"
// import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const TopNav = () => {
  const [tags, setTags] = React.useState([])
  React.useEffect(() => {
    ;(async () => {
      try {
        const data = await axios.get(`${window.location.origin}/api/tags`)
        setTags(data.data)
      } catch {}
    })()
  }, [])
  return (
    <div>
      {/* <Navbar bg="dark" className="darkbg" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Navbar> */}
      <nav className="navbar navbar-expand-lg navbar-dark darkbg" role="navigation" aria-label="main navigation">
        <Link className="navbar-brand" to="/">
          <img src="/AmariSmol.png" style={{ height: "75px", padding: "10px" }} className="d-inline-block align-top" alt=""></img>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/backgrounds">
                Backgrounds
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/backgrounds/request">
                Request Backgrounds
              </Link>
            </li>
            <li className="nav-item dropdown">
              {/* eslint-disable-next-line */}
              <Link className="nav-link dropdown-toggle" style={{ color: "white" }} to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tags
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {tags && tags.length > 0 ? (
                  tags.map((x) => (
                    /* eslint-disable-next-line */
                    <Link to={`/backgrounds/${x}`} className={"dropdown-item white"}>
                      {x}
                    </Link>
                  ))
                ) : (
                  /* eslint-disable-next-line */
                  <Link to="#" className={"dropdown-item white"}>
                    No tags found
                  </Link>
                )}
              </div>
            </li>
          </ul>
          <div className="navbar-end">
            <div className="navbar-item">
              {window.supabase.auth.user() ? (
                <p style={{ paddingRight: "10px" }}>
                  <div className="navbar-item has-dropdown is-hoverable">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="navbar-link white">
                      <figure className="image">
                        <img src={window.supabase.auth.user()?.user_metadata.avatar_url} alt="Avatar" className="is-rounded" style={{ width: "28px", height: "32px" }} />
                      </figure>
                      <div style={{ paddingRight: "10px" }} />
                      {window.supabase.auth.user()?.user_metadata.full_name}
                    </a>

                    <div className="navbar-dropdown">
                      <Link className="navbar-item" to="/manage">
                        Manage Backgrounds
                      </Link>

                      <Link className="navbar-item" to="/upload">
                        Upload Background
                      </Link>

                      <hr className="navbar-divider" />

                      <Link className="navbar-item has-text-danger" to="#" onClick={Logout}>
                        Logout
                      </Link>
                    </div>
                  </div>
                </p>
              ) : (
                <></>
              )}

              <div className="buttons">
                <a className="button is-amariYellow" href="https://discord.gg/ZfR7sr2HYr">
                  AmariBot Support
                </a>
                {window.supabase.auth.user() ? (
                  <></>
                ) : (
                  <button className="button is-amariYellow" onClick={Login}>
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line */}
      </nav>
    </div>
  )
}

export default TopNav
