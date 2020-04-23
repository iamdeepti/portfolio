import React, { Component } from "react";
import {
	Header,
	Segment,
	Divider,
	Menu,
	Icon,
	Button,
} from "semantic-ui-react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import "../App.css";
import { HashLink as Link } from "react-router-hash-link";
import {Sidebar} from "../components/Sidebar"
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
		const activeItem = this.state.activeItem;
		return (
			<div className="Background">
				
					<Navbar/>
					<Sidebar/>
				
				
					<Segment className="Background container ">
						<Header as="p" className="Green starting">
							Hi, My name is
						</Header>
						<Header as="h1" className="White heading">
							Deepti Singh,{" "}
						</Header>
						<Header as="h3" className="Blue sub-heading">
							An avid coder who loves building things.
						</Header>
						<div className="box">
							<Header as="p" className="Blue apart para-intro">
								I'm a pre-final year student at DTU (Delhi Technological
								University, India) pursuing B.Tech in Mathematics and Computing.
								I love coding, and building stuff. I'm a full stack
								web-developer.
							</Header>
						</div>
						<Divider horizontal className="section" id="about">
							<Header as="h4" className="White sub-heading section">
								<span className="Green">01.</span> About Me
							</Header>
						</Divider>
						<About />
						<Divider horizontal className="section" id="projects">
							<Header as="h4" className="White sub-heading section">
								<span className="Green">03.</span> Projects
							</Header>
						</Divider>
						<Projects />
						<Footer />
					</Segment>
				
				
			</div>
		);
	}
}

export default profile;
