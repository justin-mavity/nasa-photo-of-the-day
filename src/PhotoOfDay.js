import React from "react";

export default function PhotoOfDay({ info, action }) {
  return (
    <div className="photo-info contanier">
      <div className="img-container">
        <img src={info.url} alt="" />
      </div>
      <h1>{info.title}</h1>
      <p>{info.date}</p>
      <span>{info.copyright}</span>
      <button onClick={() => action(info.id)}>Read About</button>
    </div>
  );
}
