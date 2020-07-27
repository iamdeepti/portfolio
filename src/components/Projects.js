import React, { Component } from "react";
import "../App.css";
import { Container, Button, Card, Icon, Label } from "semantic-ui-react";
export class Projects extends Component {
	render() {
		return (
			<Container>
				<Card.Group itemsPerRow={2} stackable>
					<Card className=" card" raised>
						<Card.Content extra>
							<Icon name="folder open outline" size="big" color="teal"></Icon>
							<span className="float-right">
								<Label basic className="label-blue" size="small">
									Contributors
									<Label.Detail>4</Label.Detail>
								</Label>
							</span>
							<Button  floated="right" icon>
								<a href="https://www.github.com/iamdeepti/shecure">
									<Icon name="github" color="teal" size="big"></Icon>
								</a>
							</Button>
						</Card.Content>
						<Card.Content>
							<Card.Header
								className="White"
								as="a"
								href="https://shecure.herokuapp.com/">
								ShECURE
							</Card.Header>

							<Card.Description className="slate">
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
					<Card  raised>
						<Card.Content extra>
							<Icon name="folder open outline" size="big" color="teal"></Icon>
							<Button  floated="right" icon>
								<a href="https://www.github.com/iamdeepti/online-store">
									<Icon name="github" color="teal" size="big"></Icon>
								</a>
							</Button>
						</Card.Content>
						<Card.Content>
							<Card.Header className="White">Online Store</Card.Header>
							<Card.Description className="slate">
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
					<Card className=" card" raised>
						<Card.Content extra>
							<Icon name="folder open outline" size="big" color="teal"></Icon>
							<Button  floated="right" icon>
								<a href="https://www.github.com/iamdeepti/portfolio">
									<Icon name="github" color="teal" size="big"></Icon>
								</a>
							</Button>
							
						</Card.Content>
						<Card.Content>
							<Card.Header
								className="White"
								as="a"
								href="#">
								PORTFOLIO
							</Card.Header>

							<Card.Description className="slate">
								A simple portfolio website built using ReactJS <br/>
								(Yeah! you're viewing it right now)
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<Label basic className="label-blue">
								ReactJS
							</Label>
							<Label basic className="label-blue">
								Semantic UI
							</Label>
							<Label basic className="label-blue">
								CSS
							</Label>
						</Card.Content>
					</Card>
				</Card.Group>
			</Container>
		);
	}
}

export default Projects;
