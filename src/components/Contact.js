import React, { Component } from "react";
import "../App.css";
import { Segment, Header, Icon } from "semantic-ui-react";
export class Contact extends Component {
	render() {
		return (
			<div>
				<Segment className="Background container">
					<Header as="p" className="slate apart contact-text">
					 Feel free to say hello at <a href='mailto:iamdeepti956@gmail.com'>iamdeept956@gmail.com</a>.{" "}
						<br />
						Or just connect with me on <br />
						<a href="https://www.github.com/iamdeepti">
							<Icon name="github" color="teal" size='large' />
						</a>
						<a href="https://www.linkedin.com/in/deepti-singh-276b9b152/">
							<Icon name="linkedin" color="teal" size='large' />
						</a>
						<a href="https://www.instagram.com/ldeepsl/">
							<Icon name="instagram" color="teal" size='large' />
						</a>
                        <br/>
                        
						
					</Header>
				</Segment>
			</div>
		);
	}
}

export default Contact;
