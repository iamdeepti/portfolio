import React, { Component } from "react";
import { Menu, Button, Segment, Label } from "semantic-ui-react";
import "../App.css";
import { HashLink as Link } from "react-router-hash-link";
export class Navbar extends Component {
	state = { activeItem: "Home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	render() {
		const activeItem = this.state.activeItem;
		return (
			<Segment className="Background">
				<Menu pointing secondary size="large" stackable>
					<Menu.Item
						as="a"
						name="Home"
						onClick={this.handleItemClick}
						active={activeItem === "Home"}
						className="White apart">
						<Link to="/#about" className='White'>
							<span className="Green">01.</span> About
						</Link>
					</Menu.Item>
					<Menu.Item
						as="a"
						name="Blog"
						onClick={this.handleItemClick}
						active={activeItem === "Blog"}
						className="White apart">
							<Link to='/#blog' className='White'>
						<span className="Green">02.</span> Blog
						</Link>
					</Menu.Item>
					<Menu.Item
						as="a"
						name="Projects"
						onClick={this.handleItemClick}
						active={activeItem === "Projects"}
						className="White apart">
							<Link to='/#projects' className='White'>
						<span className="Green">03.</span> Projects
						</Link>
					</Menu.Item>
					<Menu.Menu position="right">
						<Button as='a' basic color="teal" floated="left" className="label-green" href='https://drive.google.com/file/d/1TC19IuKqCvmV9aTe7yFkCe9ymNRrJGgw/view?usp=sharing'>
							Resume
						</Button>
					</Menu.Menu>
				</Menu>
			</Segment>
		);
	}
}

export default Navbar;
