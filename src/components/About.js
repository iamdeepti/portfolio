import React, { Component } from 'react'
import profile_pic from '../components/profile_pic.jpg';
import { Item, Container,Segment, Header, } from 'semantic-ui-react';
import '../App.css';
export class About extends Component {
    render() {
        return (
            <Segment className='Background container'>
                <Item>
                    <Item.Image src={profile_pic} className='img' size='small' floated='right'/>
                    <Item.Content>
                        {/* <Item.Header className='White'>1> ABOUT ME</Item.Header> */}
                        
                        <Item.Description >
                            <Header as='p'className='Blue apart'>
                        Hi, I'm Deepti Singh, a pre-final year student at <span className='Green'>Delhi Technological University</span> pursuing B.Tech in Mathematics and Computing.
                        I'm a self taught full-stack Web-Developer. I love coding and I'm always up for a challenge. 
                        
                        Some of the technologies I have worked with recently:
                        <ul className='Green'>
                            <li>React JS</li>
                            <li>PHP</li>
                            <li>JavaScript</li>
                            <li>HTML and CSS</li>
                        </ul>
                        Beside this I love exploring Machine Learning Algorithms too. 
                        My hobby includes sketching and reading novels.
                        </Header>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Segment>
        )
    }
}

export default About
