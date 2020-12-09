import React from "react";

export default function Photo(props) {
  const { photo } = props;
  if (!photo) {
    return <div>Loading.....</div>;
  }
  return (
    <div className="photo">
      <div className="image">
        <h1>{photo.title}</h1>
        <div>
          <img src={photo.url} alt="" />
        </div>
        <span className="copyright">{photo.copyright}</span>
      </div>
      <div className="explanation">
        <p>{photo.explanation}</p>
      </div>
    </div>
  );
}
