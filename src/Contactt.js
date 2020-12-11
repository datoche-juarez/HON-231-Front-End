import React from "react";	
import Container from "react-bootstrap/Container";	
import Col from "react-bootstrap/Col";	
import Form from "react-bootstrap/Form";	
import Button from "react-bootstrap/Button";	
import axios from "axios";	

const submitForm = () => {	
  document.getElementById('submitFormBtn').disabled = true;	
  const headers = {	
    headers: {	
      "Content-Type": "application/json",	
    },	
  };	
  axios	
    .post(	
      "https://e43pq91ima.execute-api.us-east-2.amazonaws.com/dev/contact",	
      {	
        Name:	
          document.getElementById("fname").value +	
          " " +	
          document.getElementById("lname").value,	
        Email: document.getElementById("email").value,	
        Service: "Cordial Shoppe",	
        Mobile: document.getElementById("mobile").value,	
        Message: document.getElementById("message").value,	
      },	
      headers	
    )	
    .then((res) => {	
      document.getElementById("success_alert").style.display = "block";	
      document.getElementById("error_alert").style.display = "none";	
      document.getElementById('submitFormBtn').disabled = false;	
    })	
    .catch((err) => {	
      document.getElementById("success_alert").style.display = "none";	
      document.getElementById("error_alert").style.display = "block";	
      document.getElementById('submitFormBtn').disabled = false;	
    });	
};	
const Contact = () => (	
  <div className="container p-3 my-3 light text-black">	
    <Container className="justify-content-lg-center">	
      <h1 className="text-center">Contact Us</h1>	
      <br />	
      <Form>	
        <Form.Row>	
          <Col>	
            <Form.Label text-color="warning">First Name</Form.Label>	
            <Form.Control id="fname" />	
          </Col>	
          <Col>	
            <Form.Label>Last Name</Form.Label>	
            <Form.Control id="lname" />	
          </Col>	
        </Form.Row>	
        <br />	
        <Form.Row>	
          <Col>	
            <Form.Label>Email Address</Form.Label>	
            <Form.Control type="email" id="email" />	
          </Col>	
          <Col>	
            <Form.Label>Mobile</Form.Label>	
            <Form.Control type="phone" id="mobile" />	
          </Col>	
        </Form.Row>	
        <br />	
        <Form.Group>	
          <Form.Label>Type message here</Form.Label>	
          <Form.Control as="textarea" rows="5" id="message" />	
        </Form.Group>	
        <br />	
        <div	
          class="alert alert-danger"	
          id="error_alert"	
          style={{ display: "none" }}	
          role="alert"	
        >	
          Sorry, there was an error!	
        </div>	
        <div	
          class="alert alert-success"	
          id="success_alert"	
          style={{ display: "none" }}	
          role="alert"	
        >	
          Thank you for the feedback!	
        </div>	
        <br />	
        <Button	
          onClick={() => submitForm()}	
          as="input"	
          type="submit"	
          value="Submit"	
          variant="info"	
          id="submitFormBtn"	
        />{" "}	
      </Form>	
    </Container>	
  </div>	
);

// export default Contact;