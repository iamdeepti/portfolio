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
			
			<Responsive  minWidth={601} >
			<Segment className="Background">
				<Menu pointing secondary fixed='top' size='large'>
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
					<Menu.Item
						as="a"
						name="Contacts"
						onClick={this.handleItemClick}
						active={activeItem === "Projects"}
						className="White apart">
							<Link to='/#contact' className='White'>
						<span className="Green">04.</span> Contact
						</Link>
					</Menu.Item>
					
					<Menu.Menu position="right">
						<Label as='a' basic className="label-green resume-label apart" href='https://drive.google.com/file/d/1TC19IuKqCvmV9aTe7yFkCe9ymNRrJGgw/view?usp=sharing'>
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
