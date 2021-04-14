import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

// const NavBar = props => {
//     const links = (
//         <ul>
//             <li>
//                 <Link to="/about">About</Link>
//             </li>
//             <li>
//                 <Link to="/projects">Projects</Link>
//             </li>
//             <li>
//                 <Link to="/design">Design</Link>
//             </li>
//         </ul>
//     );
//     return (
//         <nav className="navbar bg-dark">
//             <h1>
//                 <Link to="/">Samantha Toll</Link>
//             </h1>
//             <Fragment>{links}</Fragment>
//         </nav>
//     )
// }

const NavBar = props => {
  // const newLinkClicked = (elementId) => {
  //   var element = document.getElementById(elementId);
  //   element.classList.add("active");
  // }

  return (
    <header id="header">
      <div class="d-flex flex-column">

        <div class="profile">
          <img src="assets/img/me.JPG" alt="" class="img-fluid rounded-circle" />
          <h1 class="text-light"><a href="index.html">Samantha Toll</a></h1>
          <div class="social-links mt-3 text-center">
            <a href="https://twitter.com/Sam17Toll" class="twitter" target="_blank"><i class="bx bxl-twitter"></i></a>
            <a href="https://www.facebook.com/sam.toll.503/" class="facebook" target="_blank"><i class="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/sam_toll/?hl=en" class="instagram" target="_blank"><i class="bx bxl-instagram"></i></a>
            <a href="https://www.linkedin.com/in/samantha-toll-b0738218b/" class="linkedin" target="_blank"><i class="bx bxl-linkedin"></i></a>
          </div>
        </div>
      
        <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li><Link to="/" class="nav-link scrollto"><i class="bx bx-home"></i> <span>Home</span></Link></li>
            <li><Link to="/about" id="about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></Link></li>
            <li><Link to="/resume" id="resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></Link></li>
            <li><Link to="/projects" id="projects" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Projects</span></Link></li>
            <li><Link to="/services" id="services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></Link></li>
            <li><Link to="/contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Artwork</span></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

NavBar.propTypes = {

}

export default NavBar
