import React, { Component } from "react";
import "../App.css";
import { Responsive, Menu, Icon, Button, Label } from "semantic-ui-react";
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
				<Menu fixed="top">
					<Menu.Item>
						<Button onClick={this.togglefunc} >
							<Icon name={this.state.icon} size="large" />
						</Button>
					</Menu.Item>
				</Menu>

				{this.state.visible === true && (
					<div>
						<div className="sidebar">
							<ul className="White no-dots apart">
								<li className="sidebar-items">
									<Link to="/#about" className="White" onClick={this.togglefunc}>
										<span className="Green">01.</span> <br />
										About
									</Link>
								</li>
								<li className="sidebar-items">
									<Link to="/#work" className="White" onClick={this.togglefunc}>
										<span className="Green">02.</span>
										<br /> Work Experience
									</Link>
								</li>
								<li className="sidebar-items">
									<Link to="/#projects" className="White" onClick={this.togglefunc}>
										<span className="Green">03.</span>
										<br /> Projects
									</Link>
								</li>
								<li className="sidebar-items">
									<Link to="/#contact" className="White" onClick={this.togglefunc}>
										<span className="Green">04.</span>
										<br /> Contact
									</Link>
								</li>
								<li className="sidebar-items">
									<a href="https://docs.google.com/document/d/1O1Kg-trpacfW5HPCDjgoHOUpTzD89XnKTbXCoD5y7YA/edit?usp=sharing">
										<Label basic className="label-green" as="a">
											Resume
										</Label>
									</a>
								</li>
							</ul>
						</div>
					</div>
				)}
			</Responsive>
		);
	}
}

export default Sidebar;
