import React from "react";
import VideoPlayer from "react-player"; 
import video from "../assets/virtual.mp4";

function VideoJS() {
  return (
    <div className="App">
      
      <VideoPlayer url={video} width="720" height="420" playing={true} controls={true} />
    </div>
  );
}

export default VideoJS;


// import React from 'react'; // Importe React
// import { DefaultPlayer as Video } from 'react-html5video'; // Importe le lecteur vidéo par défaut de react-html5video

// import 'react-html5video/dist/styles.css'; // Importe les styles de react-html5video

// import introVideo from './assets/virtual.mp4'; // Importe la vidéo

// const ReactVideoPlayer = () => {
//   // Fonction qui définit le composant ReactVideoPlayer

//   return (
//     <Video autoPlay loop>
//       {/* Affiche la vidéo en boucle et en lecture automatique */}
//       <source src={introVideo} type="video/mp4" />
//       {/* Source de la vidéo */}
//     </Video>
//   );
// };

// export default ReactVideoPlayer;