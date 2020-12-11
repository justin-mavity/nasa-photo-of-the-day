import React, { useState, useEffect } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import styled from "styled-components";
import axios from "axios";
import Photo from "./Photo";
import "./App.css";

const StyledNav = styled.nav`
  margin: 3% 0;
  width: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: space-around;

  a {
    width: 10%;
    margin: 0 25%;
    font-size: 2rem;
    text-decoration: none;
    color: white;
    justify-content: center;
  }
`;
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
      <StyledNav>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem active tag="a" href="/">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem tag="a" href="/">
            About
          </BreadcrumbItem>
        </Breadcrumb>
      </StyledNav>
      <h1>NASA's Pick of the Day</h1>
      <Photo key={pick.date} photo={pick} />
    </div>
  );
}
