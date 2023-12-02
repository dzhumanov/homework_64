import { NavLink } from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-main bg-primary">
      <div className="container-fluid w-75 d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand" to={"/"}>
          My Blog
        </NavLink>
        <div className="d-flex">
          <NavLink className="nav-link text-white me-5" to="/posts">
            Home
          </NavLink>
          <NavLink className="nav-link text-white me-5" to="/new-post">
            Add
          </NavLink>
          <NavLink className="nav-link text-white me-5" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link text-white" to="/contacts">
            Contacts
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
