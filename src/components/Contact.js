import React, { Component } from "react";
import "../App.css";
import {  Icon } from "semantic-ui-react";
import profile_pic from "../components/profile_pic.jpg";

export class Contact extends Component {
	render() {
		return (
			<div className='section' id='contact'>
				<h1 className='sub-heading'><span className='Green numbers'>04.</span>Reach out to Me!</h1>
					<div className='row'>
					<div className='contact-text'>
					<p className='Blue'>
					DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL. <br/>
					Feel free to say hi at <a href='mailto:iamdeepti956@gmail.com'>iamdeept956@gmail.com</a>.{" "}
						<br />
						<Icon name='map marker alternate'  />
						New Delhi, India
                        
						<br/>
						Open for opportunities: Yes<br/>
						<a href="https://www.github.com/iamdeepti">
							<Icon name="github" size='large' />
						</a>
						<a href="https://www.linkedin.com/in/deepti-singh-276b9b152/">
							<Icon name="linkedin" size='large' />
						</a>
						<a href="https://www.instagram.com/ldeepsl/">
							<Icon name="instagram" size='large' />
						</a>
						

					</p>
					</div>
					<div className='contact-img'>
						<img src={profile_pic} alt='profile pic'/>
					</div>
					</div>
					
			</div>
		);
	}
}

export default Contact;
