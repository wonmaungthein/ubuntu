import React, { Component, Fragment } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../../containers/Home/Home";
import ContactUs from "../../containers/ContactUs/ContactUs";
import Addresses from "../../containers/Addresses/Addresses";
import Shelters from "../../containers/Shelters/Shelters";
import Referrals from "../../containers/Referrals/Referrals";
import Users from "../../containers/Users/Users";

import About from "../../containers/About/About";
class AppBody extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <h1>This is App body part</h1>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contactUs" component={ContactUs} />
            <Route path="/shelters" component={Shelters} />
            <Route path="/referrals" component={Referrals} />
            <Route path="/addresses" component={Addresses} />
            <Route path="/users" component={Users} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default AppBody;
