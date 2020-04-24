import React, { Component } from "react";
import "../App.css";
import { Segment, Header, Icon } from "semantic-ui-react";
export class Contact extends Component {
	render() {
		return (
			<div>
				<Segment className="Background container">
					<Header as="p" className="Blue apart contact-text">
						Here are the links to my social profiles <br />
						<a href="https://www.github.com/iamdeepti">
							<Icon name="github" color="grey" />
						</a>
						<a href="https://www.linkedin.com/in/deepti-singh-276b9b152/">
							<Icon name="linkedin" color="grey" />
						</a>
						<a href="https://www.instagram.com/ldeepsl/">
							<Icon name="instagram" color="grey" />
						</a>
                        <br/>
                        Or say hello at <span className="Green">iamdeept956@gmail.com</span>.{" "}
						<br />
						
					</Header>
				</Segment>
			</div>
		);
	}
}

export default Contact;