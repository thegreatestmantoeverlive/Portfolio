// import React from 'react';


// const Works = () => {

//   const handleTabClick = (str) => {
//     document.querySelector(".active").remove(".active");
//     switch (str) {
//       case "Good":
//         document.querySelector("#tab-good").add('.active');
//         break;
//       case "Okish":
//         document.querySelector("#tab-ok").add('.active');
//         break;
//       case "Bad":
//         document.querySelector("#tab-bad").add('.active');
//         break;
//     }
//   }

//   return (
//     <div id="works">
//       <h1>Works</h1>
//       <div id="tab">
//         <button className="tab-button active" id="tab-good" onClick={handleTabClick("Good")}>Good Ones</button>
//         <button className="tab-button" id="tab-ok" onClick={handleTabClick("Okish")}>Okish Ones</button>
//         <button className="tab-button" id="tab-bad" onClick={handleTabClick("Bad")}>Really Bad Ones</button>
//       </div>
//       <div id="works-panel">
//       </div>
//     </div>
//   );
// }

// export default Works;

import React, { useState } from 'react';

const Works = () => {

  const [activeTab, setActiveTab] = useState("Good");

  const handleTabClick = (str) => {
    setActiveTab(str);
  }

  return (
    <div id="works">
      <h1>Works</h1>
      <div id="tab">
        <button className={`tab-button ${activeTab === "Good" ? "active" : ""}`} onClick={() => handleTabClick("Good")}>Good Ones</button>
        <button className={`tab-button ${activeTab === "Okish" ? "active" : ""}`} onClick={() => handleTabClick("Okish")}>Okish Ones</button>
        <button className={`tab-button ${activeTab === "Bad" ? "active" : ""}`} onClick={() => handleTabClick("Bad")}>Really Bad Ones</button>
      </div>
      <div id="works-panel">
      </div>
    </div>
  );
}

export default Works;
