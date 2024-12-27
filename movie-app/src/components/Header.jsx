import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
      <div className="container-fluid">
        <NavLink to="#" className="navbar-brand">
          <i class="bi bi-camera-reels mr-1"></i>MoiveHunt
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle='collapse' data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
     
        <div className="collapse navbar-collapse " id="menu">
        <ul className="navbar-nav me-auto">
          <li className="nav-items">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/movies/top"  className="nav-link">Top Rated</NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/movies/popular"  className="nav-link">Popular</NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/movies/upcomming"  className="nav-link">Upcomming</NavLink>
          </li>
        </ul>
        <form action="#">
        <input type="search" className="form-control " placeholder="search" />
        </form>
        </div>
      </div>

    
    </nav>
  );
};
