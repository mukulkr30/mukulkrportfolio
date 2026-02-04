import { useState } from "react";
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom"

export default function Navbar() {

    // const [light, setLight] = useState(false);

    // const toggleTheme = () => {
    //     if (!light) {
    //     document.documentElement.style.setProperty(
    //         "--bg-color",
    //         "#ffffff"
    //     );
    //     document.documentElement.style.setProperty(
    //         "--text-color",
    //         "#000000"
    //     );
    //     } else {
    //     document.documentElement.style.setProperty(
    //         "--bg-color",
    //         "rgb(3, 1, 14)"
    //     );
    //     document.documentElement.style.setProperty(
    //         "--text-color",
    //         "#ffffff"
    //     );
    //     }
    //     setLight(!light);
    // };

  return (
    <nav className="navbar navbar-dark">
      <ul className="nav nav-pills mx-auto nav-responsive">
        <li className="nav-item">
          <NavLink to='' className="nav-link text-center" >
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='skill' className="nav-link text-center" >
            Skills
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='certificate' className="nav-link text-center" >
            Certificates
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='project' className="nav-link text-center" >
            Projects
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='ranking' className="nav-link text-center" >
            Ranking
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='contact' className="nav-link text-center" >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
