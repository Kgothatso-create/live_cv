import React, { useCallback, useState, useEffect } from "react";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [navScroll, setNavScroll] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavScroll = () => {
    if (window.scrollY === 0) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavScroll);
    return () => {
      window.removeEventListener("scroll", handleNavScroll);
    };
  }, []);

  return (
    <div>
      {/* phone nav */}
      <div className="container-fluid d-flex justify-content-center align-items-center d-sm-block d-md-none">
        <div
          onClick={handleNav}
          className={!nav ? "fixed-top" : "d-none fixed-top"}
        >
          <i
            className="fa-solid fa-bars menubars"
            style={{ fontSize: "35px", marginTop: "5px" }}
          ></i>
        </div>
        {nav ? (
          <div className="container text-center menu-container overlay roll-down">
            <div className="row " onClick={handleNav} justify-content-center>
              <i
                className="fa-solid fa-x"
                style={{ fontSize: "35px", marginTop: "10px" }}
              ></i>
            </div>
            <div className="row">
              <button
                type="button"
                className="btn btn-dark "
                fdprocessedid="89c4m4"
                style={{ padding: 10, width: 500, marginTop: 50 }}
              >
                <i className="fa-solid fa-house"></i> Home
              </button>
            </div>
            <div className="row">
              <button
                type="button"
                className="btn btn-dark"
                fdprocessedid="89c4m4"
                style={{ padding: 10, width: 500, marginTop: 50 }}
              >
                <i className="fa-solid fa-helmet-safety"></i> Projects
              </button>
            </div>
            <div className="row">
              <button
                type="button"
                className="btn btn-dark"
                fdprocessedid="89c4m4"
                style={{ padding: 10, width: 500, marginTop: 50 }}
              >
                <i className="fa-solid fa-building"></i> Experience
              </button>
            </div>
            <div className="row">
              <button
                type="button"
                className="btn btn-dark "
                fdprocessedid="89c4m4"
                style={{ padding: 10, width: 500, marginTop: 50 }}
              >
                <i className="fa-solid fa-gears"></i> Self Development
              </button>
            </div>
            <div className="row">
              <button
                type="button"
                className="btn btn-dark"
                fdprocessedid="89c4m4"
                style={{ padding: 10, width: 500, marginTop: 50 }}
              >
                <i className="fa-solid fa-book-open"></i> Education
              </button>
            </div>
            <div className="row">
              <button
                type="button"
                className="btn btn-dark"
                fdprocessedid="89c4m4"
                style={{
                  padding: 10,
                  width: 500,
                  marginTop: 50,
                  marginBottom: 65,
                }}
              >
                <i className="fa-solid fa-user"></i> About K.P
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* laptop nav */}
      <div className="container-fluid d-flex justify-content-center align-items-center d-md-block d-none">
        <nav
          className={`navbar navbar-expand-lg bg-dark ${
            navScroll ? "fade-in" : "d-none"
          }`}
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <i className="fa-solid fa-house icon"></i>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <i className="fa-solid fa-helmet-safety icon"></i>
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <i className="fa-solid fa-building icon"></i>
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <i className="fa-solid fa-gears icon"></i>
                    Self Development
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <i className="fa-solid fa-book-open icon"></i>
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <i className="fa-solid fa-user icon"></i>
                    About K.P
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <ul className={`floating-nav ${navScroll ? "d-none" : "roll-down"}`}>
            <li>
              <a href="#">
                <i className="fa-solid fa-house list-icon"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-helmet-safety list-icon"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-building list-icon"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-gears list-icon"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-book-open list-icon"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-user list-icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
