import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a class="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">Notes</a>
        </li>
        <li>
          <a href="#contact">Extra</a>
        </li>
        {/* <li class="book-name">
          <a href="#nothing"> Cracking the Coding Interview </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
