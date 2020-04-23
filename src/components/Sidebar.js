import React, { Component } from 'react'
import "../App.css";
import {Responsive,Menu,Icon,Button} from 'semantic-ui-react';
import { HashLink as Link } from "react-router-hash-link";

export class Sidebar extends Component {
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
      <Responsive maxWidth={600}>
        <Menu className="Background" fixed="top">
					<Menu.Item>
						<Button onClick={this.togglefunc} className="Background">
							<Icon name={this.state.icon} color="teal" size='large' />
						</Button>
					</Menu.Item>
				</Menu>
				
					{this.state.visible === true && (
						<div>
							<div className="sidebar">
								<ul className="White no-dots">
									<li className='sidebar-items'>
										<Link to="/#about" className="White">
											<span className="Green">01.</span> <br />
											About
										</Link>
									</li>
									<li className='sidebar-items'>
										<Link to="/#blog" className="White">
											<span className="Green">02.</span>
											<br /> Blog
										</Link>
									</li>
									<li className='sidebar-items'>
										<Link to="/#projects" className="White">
											<span className="Green">03.</span>
											<br /> Projects
										</Link>
									</li>
								</ul>
							</div>
						</div>
					)}
      </Responsive>
    )
  }
}

export default Sidebar;
