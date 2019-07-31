import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import Information from "./components/Information";

function App() {
  const [pod, setPOD] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=y2KRbYyjshrGhjxqIEQfnRAEM3nLxhEBvoj5sFn3"
      )
      .then(res => setPOD(res.data))
      .catch(err => console.log(err));
  }, [pod]);

  const style={
    backgroundImage: `url(${pod.hdurl})`
  }
  if (!pod) return<div className='loading'> <h3 >Loading...</h3></div>;
  return (
    <div className="App" style={style}>
      <Card cardName="pod-card" pod={pod.hdurl} />
      <Information
        containerName="container"
        title={pod.title}
        date={pod.date}
        explanation={pod.explanation}
        copyright={pod.copyright}
      />
    </div>
  );
}

// function App() {
//   const [pod, setPOD] = useState("");
//   // useEffect(() => {
//   //   axios
//   //     .get(
//   //       "https://api.nasa.gov/planetary/apod?api_key=y2KRbYyjshrGhjxqIEQfnRAEM3nLxhEBvoj5sFn3"
//   //     )
//   //     .then(res => setPOD(res.data))
//   //     .catch(err => console.log(err));
//   // }, [pod]);
// const style={
//   backgroundImage: `url(https://apod.nasa.gov/apod/image/1907/ngc3576_campbell_1824.jpg)`
// }
//   return (
//     <div className="App" style={style}>
//       <Card cardName="pod-card" pod="https://apod.nasa.gov/apod/image/1907/ngc3576_campbell_1824.jpg" />
//       <Information
//         containerName="container"
//         title="Star Forming Region NGC 3582 without Stars"
//         date="2019-07-30"
//         explanation="What's happening in the Statue of Liberty nebula?  Bright stars and interesting molecules are forming and being liberated. The complex nebula resides in the star forming region called RCW 57, and besides the iconic monument, to some looks like a flying superhero or a weeping angel.  By digitally removing the stars, this image showcases dense knots of dark interstellar dust, fields of glowing hydrogen gas ionized by these stars, and great loops of gas expelled by dying stars. A detailed study of NGC 3576, also known as NGC 3582 and NGC 3584, uncovered at least 33 massive stars in the end stages of formation, and the clear presence of the complex carbon molecules known as polycyclic aromatic hydrocarbons (PAHs). PAHs are thought to be created in the cooling gas of star forming regions, and their development in the Sun's formation nebula five billion years ago may have been an important step in the development of life on Earth.   Follow APOD in English on: Instagram, Facebook,  Reddit, or Twitter"
//         copyright='Andrew Campbell'
//       />
//     </div>
//   );
// }
export default App;

// copyright: "Andrew Campbell"
// date: "2019-07-30"
// explanation: "What's happening in the Statue of Liberty nebula?  Bright stars and interesting molecules are forming and being liberated. The complex nebula resides in the star forming region called RCW 57, and besides the iconic monument, to some looks like a flying superhero or a weeping angel.  By digitally removing the stars, this image showcases dense knots of dark interstellar dust, fields of glowing hydrogen gas ionized by these stars, and great loops of gas expelled by dying stars. A detailed study of NGC 3576, also known as NGC 3582 and NGC 3584, uncovered at least 33 massive stars in the end stages of formation, and the clear presence of the complex carbon molecules known as polycyclic aromatic hydrocarbons (PAHs). PAHs are thought to be created in the cooling gas of star forming regions, and their development in the Sun's formation nebula five billion years ago may have been an important step in the development of life on Earth.   Follow APOD in English on: Instagram, Facebook,  Reddit, or Twitter"
// hdurl: "https://apod.nasa.gov/apod/image/1907/ngc3576_campbell_1824.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Star Forming Region NGC 3582 without Stars"
// url: "https://apod.nasa.gov/apod/image/1907/ngc3576_campbell_960.jpg"
