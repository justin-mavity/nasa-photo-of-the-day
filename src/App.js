import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoOfDay from "./PhotoOfDay";
import Photo from "./Photo";
import Rover from "./Rover";
import RoverDeatils from "./RoverDetails";

import "./App.css";

const [photo, setPhoto] = useState([]);
const [rover, setRover] = useState([]);
const [current, setCurrent] = useState(null);
const [currentRover, setCurrentRover] = useState(null);

const openPhotoDetail = (id) => {
  setCurrent(id);
};

const closePhotoDetails = () => {
  setCurrent(null);
};

const openRoverDeatils = (id) => {
  setCurrentRover(id);
};

const closeCureentRover = () => {
  setCurrentRover(null);
};

useEffect(() => {
  const fetchRover = () => {
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY"
      )
      .then((res) => {
        setRover(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  fetchRover();
}, []);

useEffect(() => {
  const fetchPhotoOfDay = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`
      )
      .then((res) => {
        setPhoto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  fetchPhotoOfDay();
}, []);

function App() {
  return (
    <div className="App">
      <h1>NASA's Photo Of The Day</h1>
      {photo.map((pic) => {
        return (
          <PhotoOfDay key={pic.date} info={pic} action={openPhotoDetail} />
        );
      })}
      {current && <Photo photoId={current} close={closePhotoDetails} />}
      {rover.map((rov) => {
        return <Rover key={rov.id} info={rov} action={openRoverDeatils} />;
      })}
      {currentRover && (
        <RoverDeatils roverId={currentRover} close={closeCureentRover} />
      )}
    </div>
  );
}

export default App;
