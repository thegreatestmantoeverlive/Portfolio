import React from 'react';

const Skills = () => {
    return (
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
    );
}

export default Skills;