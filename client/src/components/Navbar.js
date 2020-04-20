import React, { Component } from "react";
import { Menu,Button,Segment, Label } from "semantic-ui-react";
import '../App.css';
export class Navbar extends Component {
	state = { activeItem:'Home'};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	render() {
        const activeItem = this.state.activeItem;
		return (
			<Segment className='Background'>
			<Menu pointing secondary size='large'>
				<Menu.Item as='a' name='Home' onClick={this.handleItemClick} active= {activeItem==='Home'} className='White apart'><span className='Green'>01.</span> About</Menu.Item>
				{/* <Menu.Item as='a'>About</Menu.Item> */}
				<Menu.Item as='a' name='Blog' onClick={this.handleItemClick} active= {activeItem==='Blog'} className='White apart'><span className='Green'>02.</span> Blog</Menu.Item>
				<Menu.Item as='a' name='Projects' onClick={this.handleItemClick} active= {activeItem==='Projects'} className='White apart'><span className='Green'>03.</span> Projects</Menu.Item>
				<Menu.Menu position='right'>
					<Button basic color='teal' floated='left' className='label-green'>Resume</Button>
					{/* <Label basic className='label-green' size='large'>RESUME</Label> */}
					</Menu.Menu>
			</Menu>
			</Segment>
		);
	}
}

export default Navbar;
