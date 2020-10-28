import React, { Component } from "react";
import { Label } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import "../App.css";
import { HashLink as Link } from "react-router-hash-link";
import { Sidebar } from "../components/Sidebar";
import Work from "../components/Work";
import "./background.jpg";
export class profile extends Component {
  state = { visible: false, icon: "bars", activeItem: "" };
  togglefunc = (e) => {
    e.preventDefault();
    if (this.state.visible === true) {
      this.setState({ visible: false, icon: "bars" });
    } else {
      this.setState({ visible: true, icon: "close" });
    }
  };
  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, visible: false, icon: "bars" });

  render() {
    return (
      <div>
        <div className=" lead">
          <Navbar />
          <Sidebar />

          <div className="first-block">
            <p className="Green"> Hi there, my name is</p>
            <h1 className="White heading">Deepti Singh</h1>
            <p className="Blue">
              I'm a final year student at Delhi Techonological University
              (India), an aspiring Software Developer and Machine Learning
              Enthusiast.
            </p>
            <Link to="/profile#contact">
              <Label basic className="label-text">
                Get in Touch
              </Label>
            </Link>
            {/* </div> */}
          </div>
        </div>

        <div className="container">
          <About />
          <Work />
          <Projects />

          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default profile;
