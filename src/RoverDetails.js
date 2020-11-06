import React, { useState, useEffect } from "react";

import axios from "axios";

export default function RoverDetails(props) {
  const { roverId, closeCurrentRover } = props;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY"
      )
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [roverId]);

  return (
    <div className="container">
      <h2>Rover Detaild:</h2>
      {details && (
        <>
          <div className="img-container">
            <h3>{details.photos.camera.name}</h3>
            <img src={details.photos.img_src} alt="" />
            <p>{details.photos.earth_date}</p>
          </div>
          <p>{details.rover.name}</p>
          <p>{details.rover.landing_date}</p>
          <p>{details.rover.launch_date}</p>
          <p>{details.rover.status}</p>
        </>
      )}
      <button onClick={closeCurrentRover}>Close</button>
    </div>
  );
}
