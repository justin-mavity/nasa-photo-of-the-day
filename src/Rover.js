import React from "react";

export default function Rover({ info, action }) {
  return (
    <div className="rovers">
      <div>{info.name}</div>
      <button onClick={() => action(info.id)}>See More</button>
    </div>
  );
}
