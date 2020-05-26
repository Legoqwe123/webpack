import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light row justify-content-around bg-primary">
        <div className="col-auto p-0">
          <Link className="navbar-brand" to="/">
            JS
          </Link>
        </div>
        <div className="col-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
