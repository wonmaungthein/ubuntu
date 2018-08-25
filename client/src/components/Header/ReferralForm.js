import React, { Component } from "react";
import './Referral.css';
import { Button, Grid, Row, Col } from 'react-bootstrap';



class ReferralForm extends Component {
  state = {
    title: ""
  };

  handleChangeInput = e => {
    this.setState({
      title: e.target.value
    });
  };



  render() {
    return (
      <div class="container">
        {/* <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6} lg={12}>
            </Col>
            <Col xs={6} md={4}> */}
        <form >
          <div className="row">
            <div className="col-25">
              <label for="fname">First Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Date of Birth</label>
            </div>
            <div className="col-75">
              <input type="number" id="dateofbirth" name="lastname" placeholder="Date of Birth.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="gender">
                Gender
              </label>
            </div>
            <div className="col-75">
              <div className="Gender">
                <div className="row">
                  <div className="col-30">
                    <lable for="male">Male</lable>
                    <input type="radio" value="male" name="gender" />
                  </div>
                  <div className="col-30">
                    <label for="female">Female</label>
                    <input type="radio" value="female" name="gender" />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="col-75">
              <input type="number" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="phone">Being Homeless</label>
            </div>
            <div className="col-75">
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="phone">Previous Address</label>
            </div>
            <div className="col-75">
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="phone">NI Number</label>
            </div>
            <div className="col-75">
              <input type="number" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="country">Country</label>
            </div>
            <div className="col-75">
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="subject">Subject</label>
            </div>
            <div className="col-75">
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            </div>
          </div>


          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
        {/* </Col>
            <Col xsHidden md={4}>
            </Col>
          </Row>
        </Grid> */}
      </div>
    );
  }
}

export default ReferralForm;
