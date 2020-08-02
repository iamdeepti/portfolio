import React, { Component } from "react";
import "../App.css";
import {  Button, Card, Icon, Label } from "semantic-ui-react";
export class Projects extends Component {
	render() {
		return (
			<div className='section' id='projects'>
				<h1 className='sub-heading' ><span className='Green numbers'>03.</span>Some Things I've Built</h1>
				<Card.Group itemsPerRow={3} stackable>
					<Card className=" card" raised>
						<Card.Content extra>
							<Icon name="folder open outline" size="big" color="teal"></Icon>
							<Button  floated="right" icon>
								<a href="https://shecure.herokuapp.com">
									<Icon name="external alternate" size='large'></Icon>
								</a>
							</Button>
							<Button  floated="right" icon>
								<a href="https://www.github.com/iamdeepti/shecure">
									<Icon name="github"  size="big"></Icon>
								</a>
							</Button>
							
							<span className="float-right">
								<Label basic className="label-blue" size="small">
									Contributors
									<Label.Detail>4</Label.Detail>
								</Label>
							</span>
							
							
						</Card.Content>
						<Card.Content>
							<Card.Header>
								ShECURE
							</Card.Header>

							<Card.Description >
								ShECURE is a web app that leverages Machine Learning algorithms
								to predict the fast and safe routes for women to travel. 
								Sentiment Analysis of feedback is done to improve the dataset.
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
									<Icon name="github"  size="big"></Icon>
								</a>
							</Button>
						</Card.Content>
						<Card.Content>
							<Card.Header className='White'>Online Store</Card.Header>
							<Card.Description >
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
								<a href="https://iamdeepti.netlify.app">
									<Icon name="external alternate" size="large"></Icon>
								</a>
							</Button>
							<Button  floated="right" icon>
								<a href="https://www.github.com/iamdeepti/portfolio">
									<Icon name="github" size="big"></Icon>
								</a>
							</Button>
							
						</Card.Content>
						<Card.Content>
							<Card.Header>
								PORTFOLIO
							</Card.Header>

							<Card.Description >
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
			</div>
		);
	}
}

export default Projects;
