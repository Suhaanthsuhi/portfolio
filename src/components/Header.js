import React from 'react'

const Header = () => {
  const showNav = () => {
    let navBar = document.getElementById("navBar1");
    navBar.classList.toggle("menuClose");
    }
  return (
    <header className="ff-ub">
      <nav className="flex align-center">
        <h1>
          <a href="#">
            Portfo<span>lio.</span>
          </a>
        </h1>
        <ul className="flex justify-around align-center" id="navBar1">
          <li className="cross-mark" onClick={ showNav }>
            <i class="fa-solid fa-xmark"></i>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="menu" id="menu" onClick={ showNav }>
          <i className="fa-solid fa-bars" />
        </button>
      </nav>
    </header>
  );
};

export default Header;