import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import skyline from "../assets/skyline.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${skyline}) no-repeat fixed bottom;
    background-size: cover;
    color: #0000;
    height: 330px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container style= {{color: '#000'}}>
    
        <h1>Join Us</h1>
        <p>In building a network of resources focusing on <br></br>
          housing and employment for former offendors. 
          {/* that <br></br>
          have changed their lives around and deserve an opp-<br></br> 
          ortunity to move on with their lives. */}
        </p>
      </Container>
    </Jumbo>
  </Styles>
);
