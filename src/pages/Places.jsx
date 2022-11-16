import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import PlacesGrid from "../components/PlacesGrid";

class PlacesPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="px-20 py-20">
          <Tabs />
          <PlacesGrid />
        </div>
      </React.Fragment>
    );
  }
}

export default PlacesPage;
