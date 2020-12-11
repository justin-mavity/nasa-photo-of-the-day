import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import styled from "styled-components";

const StyledPhoto = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 5.5rem;
    color: lightcoral;
  }
  small {
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3%;
    color: lightgrey;
  }
  p {
    color: lightgoldenrodyellow;
  }
`;

export default function Photo(props) {
  const { photo } = props;
  if (!photo) {
    return <div>Loading.....</div>;
  }
  return (
    <StyledPhoto>
      <Card>
        <CardTitle tag="h2">{photo.title}</CardTitle>
        <CardImg width="100%" src={photo.url} alt="" />
        <CardText>
          <small className="text-muted">{photo.copyright}</small>
        </CardText>
        <CardText>
          <p id="about">{photo.explanation}</p>
        </CardText>
      </Card>
    </StyledPhoto>
  );
}
