import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Skills from './components/skills';
import Works from './components/works'
// import Contact from './components/contact'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_text: ""
    }
  }
render() {
  return (
    <div className="App" >
      <Navbar />
      <Home />
      <Skills />
    </div>
  )
}
}
export default App;
