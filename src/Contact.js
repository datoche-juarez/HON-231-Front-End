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
      "https://ovetc22hoh.execute-api.us-east-2.amazonaws.com/dev/contact",
      {
        Name:
          document.getElementById("fname").value +
          " " +
          document.getElementById("lname").value,
        Email: document.getElementById("email").value,
        Service: "The Way Forward Project",
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
      <h1 className="text-center" >Contact Us</h1>
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
  {/* <br></br>
    <br></br>
            <h4>Join Us</h4>
                <p></p>
            <p>The Way Forward Project is only as good as its partners. If you believe our current criminal
             justice system is broken and recognize the need to give millions of Americans the opportunity 
             to lead productive healthy lives, please consider becoming one of our first partners. In the 
             year 2020, more than 20 years after the passing of the 1994 Crime Bill, its failure has become 
             obvious to the vast majority Americans, so much so in fact that criminal justice reform has 
             become popular across the political spectrum. Because of the growing interest to fixing these 
             problems, we hope to see a lot of community engagement.</p>
            <p>If you own or manage a place of business and are interested in having your business or 
             organization&rsquo;s name listed alongside others in the community that have made a commitment
             to ending the practice of blanket discrimination based on a candidates criminal record, please 
             fill out our contact form and we will add you to our job listings. If you own or manage housing 
             or rental properties and are committed to ending the practice of housing discrimination which 
             often keeps former offenders in a constant state of housing insecurity, please leave us your
             contact information. &nbsp;</p>
            <p>If you believe there is a better, smarter, more humane, and compassionate way forward, please 
             fill out our contact form and become a part of the solution. Upon completion of our form, we will 
             send you confirmation that we received your contact information. If you at any time would like to 
             change or remove your organization&rsquo;s data, please contact us.</p>
             <contactForm />    */}
  </div>
);

export default Contact;

  