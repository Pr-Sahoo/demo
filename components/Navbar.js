import React from 'react'
// import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title || "set the title"}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.about || "set about"}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="form-check form-switch text-warning" style={{marginRight: "2rem"}}>
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toogle} id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==="light" ? "Dark" : "LightUp"}</label>
      </div>
    </nav>
  )
}

// Navbar.propTypes = {
//     title: proptypes.string.isRequired,
//     about: proptypes.string.isRequired
// };
// Navbar.propTypes = {
//     title: PropTypes.number.isRequired,
//     about: PropTypesoptypes.string.isRequired
// }
// Navbar.PropTypes = {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string
// };

// Navbar.defaultProps = {
//     title: "set the title",
//     about: "set the about"
// };
