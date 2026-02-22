import React, { useState } from 'react';
import './App.css'

const setup = {
  deck: 'WKND - Nikolai Piombo Pro Model (8.25)',
  trucks: 'Independent - 141 Hollow',
  wheels: 'Spitfire - Formula Four Classic (56mm, 96)',
  bearings: 'Bones - Red Bearings',
  griptape: 'Mob - Grip Tape'
};

const videos = [
  { title: 'Chicken Bone Nowison', year: 2011, company: 'Shake Junt' },
  { title: 'Bottleneck Sewage', year: 2022, company: 'WKND' },
  { title: 'Photosynthesis', year: 2000, company: 'Alien Workshop' },
  { title: 'IPath Preview: Summer 2005', year: 2005, company: 'IPath' },
  { title: 'Baker 3', year: 2005, company: 'Baker Skateboards' }
];

function CurrentSetup() {
  return (
    <div>
      <h2>Current Skateboard Setup:</h2>
      <ul>
        <li><strong>Deck:</strong> {setup.deck}</li>
        <li><strong>Trucks:</strong> {setup.trucks}</li>
        <li><strong>Wheels:</strong> {setup.wheels}</li>
        <li><strong>Bearings:</strong> {setup.bearings}</li>
        <li><strong>Griptape:</strong> {setup.griptape}</li>
      </ul>
    </div>
  )
}

function SkateVideoPlayer() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const currentVideo = videos[currentVideoIndex];

  return (
    <div>
      <h2>Skateboarding Video</h2>
      <p><strong>Title:</strong> {currentVideo.title}</p>
      <p><strong>Year:</strong> {currentVideo.year}</p>
      <p><strong>Company:</strong> {currentVideo.company}</p>
      <button onClick={handleNextVideo}>Next Video</button>
    </div>
  );
}

function App() {
  return (
    <>
      <h1 className="title">
        This site is dedicated to keepign track of Zachary Baur's current skateboard setup!
      </h1>
      <CurrentSetup />
      <SkateVideoPlayer />
    </>
  )
}

export default App
