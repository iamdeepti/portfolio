import React, { Component } from 'react'
import profile_pic from './profile_pic.jpg'
import { Item, Container, } from 'semantic-ui-react';
import '../App.css';
export class About extends Component {
    render() {
        return (
            <Container text className='Background'>
                <Item>
                    <Item.Image src={profile_pic} className='img' size='small' floated='right'/>
                    <Item.Content>
                        {/* <Item.Header className='White'>1> ABOUT ME</Item.Header> */}
                        
                        <Item.Description className='Blue'>
                        Hi, I'm Deepti Singh, a pre-final year student at DTU pursuing B.Tech in Mathematics and Computing.
                        I'm a self taught full-stack Web-Developer. I love coding and I'm always up for a challenge. 
                        
                        Some of the technologies I have worked with recently:
                        <ul>
                            <li>React JS</li>
                            <li>PHP</li>
                            <li>JavaScript</li>
                            <li>HTML and CSS</li>
                        </ul>
                        Beside this I love exploring Machine Learning Algorithms too. 
                        My hobby includes sketching and reading novels.
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Container>
        )
    }
}

export default About
