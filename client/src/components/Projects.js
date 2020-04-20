import React, { Component } from "react";
import "../App.css";
import { Container, Button, Card, Icon, Label } from "semantic-ui-react";
export class Projects extends Component {
	render() {
		return (
			<Container className="Background">
				<Card.Group itemsPerRow={2}>
					<Card className="Background">
						<Card.Content extra>
							<Icon name="folder open outline" size="big" color="teal"></Icon>
							<span className="float-right">
								<Label basic className="label-blue" size="small">
									Contributors
									<Label.Detail>4</Label.Detail>
								</Label>
							</span>
						</Card.Content>
						<Card.Content>
							<Card.Header className="White">ShECURE</Card.Header>

							<Card.Description className="Blue">
								ShECURE is a web app that leverages Machine Learning algorithms
								to predict the fast and safest route between a source and
								destination as entered by the user. It also collects feedback
								from users and does sentiment analysis to improve the safety
								score.
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<Label basic className="label-blue">
								MERN
							</Label>
							<Label basic className="label-blue">
								Machine Learning
							</Label>
							<Label basic className="label-blue">
								ReactJS
							</Label>
						</Card.Content>
					</Card>
					<Card className="Background">
						<Card.Content extra>
							<Icon name="folder open outline" size="big" color="teal"></Icon>
							<Button className="Background" floated="right" icon>
								<Icon name="github" color="grey" size="large"></Icon>
							</Button>
						</Card.Content>
						<Card.Content>
							<Card.Header className="White">Online Store</Card.Header>
							<Card.Description className="Blue">
								A simple E-commerce website with payTM integration.
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<Label basic className="label-blue">
								LAMP
							</Label>
							<Label basic className="label-blue">
								payTM
							</Label>
							<Label basic className="label-blue">
								Bootstrap
							</Label>
                            <Label basic className="label-blue">
								PHP
							</Label>
						</Card.Content>
					</Card>
				</Card.Group>
			</Container>
		);
	}
}

export default Projects;
