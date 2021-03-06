import React, { Component } from "react";
import { Menu, Segment, Label, Responsive } from "semantic-ui-react";
import "../App.css";
import { HashLink as Link } from "react-router-hash-link";
export class Navbar extends Component {
	state = { activeItem: "Home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	render() {
		const activeItem = this.state.activeItem;
		return (
			<Responsive minWidth={601}>
				<Segment className="Background">
					<Menu pointing secondary fixed="top" floated='right' >
						<Menu.Item
							as="a"
							name="Home"
							onClick={this.handleItemClick}
							active={activeItem === "Home"}
							className="White  nav-text">
							<Link to="/#about" className="White nav-text">
								<span className="Green">01.</span> About
							</Link>
						</Menu.Item>
						<Menu.Item
							name="Blog"
							onClick={this.handleItemClick}
							active={activeItem === "Blog"}
							className="White  nav-text">
							<Link to="/#work" className="White nav-text">
								<span className="Green">02.</span> Work Experience
							</Link>
						</Menu.Item>
						<Menu.Item
							as="a"
							name="Projects"
							onClick={this.handleItemClick}
							active={activeItem === "Projects"}
							className="White  nav-text">
							<Link to="/#projects" className="White nav-text">
								<span className="Green">03.</span> Projects
							</Link>
						</Menu.Item>
						<Menu.Item
							as="a"
							name="Contacts"
							onClick={this.handleItemClick}
							active={activeItem === "Contacts"}
							className="White  nav-text">
							<Link to="/#contact" className="White nav-text">
								<span className="Green">04.</span> Contact
							</Link>
						</Menu.Item>

						<Menu.Menu position="right">
							<Label
								as="a"
								basic
								className="resume-label apart"
								href="https://docs.google.com/document/d/1O1Kg-trpacfW5HPCDjgoHOUpTzD89XnKTbXCoD5y7YA/edit?usp=sharing">
								Resume
							</Label>
						</Menu.Menu>
					</Menu>
				</Segment>
			</Responsive>
		);
	}
}

export default Navbar;
