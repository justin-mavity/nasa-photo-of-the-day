import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";
import "./App.css";

export default function App() {
  const [pick, setPick] = useState([]);

  useEffect(() => {
    const getPick = () => {
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14"
        )
        .then((res) => {
          setPick(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPick();
    return () => {};
  }, []);

  return (
    <div className="App">
      <h1>NASA's Pick of the Day</h1>
      <Photo key={pick.date} photo={pick} />
    </div>
  );
}
