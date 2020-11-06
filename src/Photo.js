import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Photo(props) {
  const { photoId, closePhotoDetails } = props;
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14"
      )
      .then((res) => {
        setPhoto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [photoId]);

  return (
    <div className="container">
      <h3>Explanation:</h3>
      <a href={photo.url}>Link to photo in HD</a>
      {photo && (
        <>
          <p>{photo.explanation}</p>
        </>
      )}
      <button onClick={closePhotoDetails}>Close</button>
    </div>
  );
}
