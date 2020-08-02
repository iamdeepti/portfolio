import React, { Component } from "react";
import "../App.css";
export class About extends Component {
	render() {
		return (
			<div className=" section" id='about'>
				
				<h1 className='sub-heading' > <span className='Green numbers'>01.</span>About Me </h1>
				<p>
					
					
						
									You can often find me solving problems on Codeforces or
									pushing some commits to my projects on Github, or maybe just
									flipping through the pages of some fiction novel :D
									<br />In the first year of my college I developed a profound
									interest in web Development and started playing with Html, JS
									and CSS. My first project was just a robot made purely using
									CSS and JS who would dance across the page, it
									looked very cool to me at that time xD. I believe I've come a long way
									since then, have a look at some of the technologies I've
									worked with :
									<ul className="Green">
										<li>React JS</li>
										<li>PHP</li>
										<li>JavaScript</li>
										<li>HTML and CSS</li>
										<li>Python</li>
									</ul>
									
									I find Machine Learning and Artificial Intelligence very
									fascinating, and since I'm a student of Mathematics too, I
									find the maths behind the algorithm less intimidating.
									<br/>
									Presently I'm learning Spanish (Just for fun). And I have
									started portrait sketching too. I'm a novice right now but
									hopefully someday in future, you'll find some amazing
									portraits decorating this website.
								
				</p>
			</div>
		);
	}
}

export default About;
