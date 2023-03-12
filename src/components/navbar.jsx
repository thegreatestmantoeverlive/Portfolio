import React from 'react';
const Navbar = () => {
    return (
      <div id="navbar">
        <div id="socials_icons">
          <a href="https://t.me/AdithyaDS"><i class="fa-brands fa-telegram"></i></a>
          <a href="https://twitter.com/SourDragon123"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://github.com/sourdragon"><i class="fa-brands fa-github"></i></a>
        </div>
        <div id="spacer">

        </div>
        <div id="links">
          <a href="#home" className='link'>Home</a>
          <a href="#about" className='link'>About</a>
          <a href="#skills" className='link'>Skills</a>
          <a href="#contact" className='link'>Contact</a>
        </div>

      </div>
    )
  }

export default Navbar;
