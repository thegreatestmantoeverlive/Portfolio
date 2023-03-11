import React from 'react';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_text: ""
    }
  }
  navBar = () => {
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
  mouseMove = (event) => {

    const { clientX, clientY } = event;
    const blob = document.getElementById("blob"); // get the blob element using the ref
    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`
      },
      { duration: 3000, fill: "forwards" }
    );


  }
  handleHomeScroll = (event) => {
    const element = document.getElementById('about');
    element.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }
  componentDidMount() {
    // document.getElementById("home").addEventListener("scroll" , this.handleHomeScroll(event))
  }
  handleTabClick = (str) =>
  {

  }

render() {
  return (
    <div className="App" >
      {/* <div id="blob" ></div>
        <div id="blur"></div> */}
      {this.navBar()}
      <div id="home">
        <div id="image">
          <img id="home-bg" src="https://i.imgur.com/CRil7GS.png">

          </img>
          <h1 id="title-home">Techfolio</h1>
          <h2 id="home-slogan">Into the Future</h2>
        </div>
        <div id="cyberpunk-track">

        </div>
        <div id="scroll-icon">
          <h3 id="scroll-title">Scroll Down</h3>
          <i class="fa-solid fa-down-long"></i>
        </div>
      </div>
      <div id="skills">
        <h1>Skills</h1>
        <div id="skills-cards">
          <div class="card">
            <h3><span id="basic">Basic </span>Video Editing</h3>
            <i class="fa-solid fa-photo-film"></i>
          </div>
          <div class="card">
            <h3>Web Development</h3>
            <i class="fa-solid fa-code"></i>
          </div>
          <div class="card">
            <h3>Competitive Programming</h3>
            <i class="fa-solid fa-meteor"></i>
          </div>
        </div>
      </div>
      <div id="Works">
        <h1>Works</h1>
        <div id="tab">
          <button class="tab-button active" onClick={this.handleTabClick("Good")}>Good Ones</button>
          <button class="tab-button" onClick={this.handleTabClick("Okish")}>Okish Ones</button>
          <button class="tab-button" onClick={this.handleTabClick("Bad")}>Ones that must burn in hell</button>
        </div>
      </div>
    </div>
  )
}
}
export default App;
