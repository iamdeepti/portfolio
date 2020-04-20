import React, { Component } from 'react';
import {Container, Header, Segment, Divider} from 'semantic-ui-react';
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import '../App.css';
export class profile extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Segment className='Background'>
                <Container text >
                    
                    <Header as='p' className='Green'>Hi, I am </Header>
                    <Header as='h1' className='White heading'>Deepti Singh, </Header>
                    <Header as='h3' className='Blue sub-heading'>An avid coder who loves building things for the web.</Header>
                    <Header as='p' className='Blue'>I'm a pre-final year student at DTU (Delhi Technological University, India) pursuing B.Tech in Mathematics and Computing.</Header>
                    <Divider horizontal><Header as='h4' className='White sub-heading'><span className='Green'>01.</span> About Me</Header></Divider>
                    <About/>
                    <Divider horizontal><Header as='h4' className='White sub-heading'><span className='Green'>03.</span> Projects</Header></Divider>
                    
                    <Projects/>
                </Container>
                
                </Segment>
                
            </div>
        )
    }
}

export default profile;
