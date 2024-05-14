import React, { useCallback, useState } from "react";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center d-sm-block d-md-none">
      <div
        onClick={handleNav}
        className={!nav ? "overlay2" : "d-none overlay2"}
      >
        <i className="fa-solid fa-bars" style={{ fontSize: "35px" }}></i>
      </div>
      {nav ? (
        <div className="container text-center menu-container overlay">
          <div className="row " onClick={handleNav} justify-content-center>
            <i className="fa-solid fa-bars" style={{ fontSize: "24px" }}></i>
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
  );
};

export default Nav;
