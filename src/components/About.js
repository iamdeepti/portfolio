import React, { Component } from "react";
import profile_pic from "../components/profile_pic.jpg";
import { Item, Segment, Header } from "semantic-ui-react";
import "../App.css";
export class About extends Component {
	render() {
		return (
			<Segment className="Background container">
				<div className="intro Blue apart">
					{" "}
					Hi there, I'm a final year student at
					<span className="Green"> Delhi Technological University</span> pursuing
					B.Tech in Mathematics and Computing.
					<br />
					<br />
				</div>

				<Item>
					<Item.Image
						src={profile_pic}
						className="img"
						size="small"
						floated="right"
					/>
					<Item.Content>
						{/* <Item.Header className='White'>1> ABOUT ME</Item.Header> */}

						<Item.Description>
							<Header as="p" className="Blue apart">
								<div className="after-intro">
									You can often find me solving problems on Codeforces or
									pushing some commits to my projects on Github, or maybe just
									flipping through the pages of some fiction novel :D
									<br /><br/> In the first year of my college I developed a profound
									interest in web Development and started playing with Html, JS
									and CSS. My first project was just a robot made purely using
									CSS and JS who would dance across the page, which at that time
									looked very cool to me xD. I believe I've come a long way
									since then, have a look at some of the technologies I've
									worked with :
									<ul className="Green">
										<li>React JS</li>
										<li>PHP</li>
										<li>JavaScript</li>
										<li>HTML and CSS</li>
										<li>Python</li>
									</ul>
									<br />
									I find Machine Learning and Artificial Intelligence very
									fascinating, and since I'm a student of Mathematics too, I
									find the maths behind the algorithm less intimidating.
									<br/><br/>
									Presently I'm learning Spanish (Just for fun). And I have
									started portrait sketching too. I'm a novice right now but
									hopefully someday in future, you'll find some amazing
									portraits decorating this website :)
								</div>
							</Header>
						</Item.Description>
					</Item.Content>
				</Item>
			</Segment>
		);
	}
}

export default About;
