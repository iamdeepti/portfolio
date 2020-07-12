import React, { Component } from "react";
import {
	Header,
	Segment,
	Divider,
	Label,
} from "semantic-ui-react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
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
						<div className='first-block'>
						<Header as="p" className="Green starting">
							Hi, My name is
						</Header>
						<Header as="h1" className="White heading">
							Deepti Singh.
						</Header>
						<Header as="h3" className=" sub-heading">
							I'm an avid coder who loves building things.
						</Header>
						<div className="box">
							<Header as="p" className="Blue apart para-intro">
								I'm a student at Delhi Techonological University (India), a full stack Web-Developer and 
								Machine Learning Enthusiast. 
								<br/>
								<div className='label-padding'>
									<Link to='/profile#contact'>
								<Label basic className='label-green label-text'>Contact Me</Label>
								</Link>
								</div>
							</Header>
						</div>
						</div>
						<Divider horizontal className="section about-section" id="about">
							<Header as="h4" className="White section-heading section">
								<span className="Green numbers">01.</span> About Me
							</Header>
						</Divider>
						<About />
						<Divider horizontal className="section" id="projects">
							<Header as="h4" className="White section-heading section">
								<span className="Green numbers">03.</span> Projects
							</Header>
						</Divider>
						<Projects />
						<Divider horizontal className="section contact-section" id="contact">
							<Header as="h4" className="White section-heading section">
								<span className="Green numbers">04.</span> Get in touch
							</Header>
						</Divider>
						<Contact />
						
						<Footer />
					</Segment>
				
				
			</div>
		);
	}
}

export default profile;
