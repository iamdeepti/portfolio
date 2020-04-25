import React, { Component } from 'react'
import profile_pic from '../components/profile_pic.jpg';
import { Item, Container,Segment, Header, } from 'semantic-ui-react';
import '../App.css';
export class About extends Component {
    render() {
        return (
            <Segment className='Background container'>
                <div className='intro Blue apart'>  I'm , a pre-final year student at <span className='Green'>Delhi Technological University</span> pursuing B.Tech in Mathematics and Computing.<br/><br/>
                          </div>
                          
                <Item>
                    <Item.Image src={profile_pic} className='img' size='small' floated='right'/>
                    <Item.Content>
                        {/* <Item.Header className='White'>1> ABOUT ME</Item.Header> */}
                        
                        <Item.Description >
                            <Header as='p'className='Blue apart'>
                          <div className ='after-intro'>
                        I enjoy building things that live on the internet. I also love turning complex problems into beautiful codes,
                        and I'm always up for a challenge. I like exploring new technologies.
                        <br/><br/>
                        Some of the technologies I have worked with recently include:
                        <ul className='Green'>
                            <li>React JS</li>
                            <li>PHP</li>
                            <li>JavaScript</li>
                            <li>HTML and CSS</li>
                        </ul>
                        <br/>
                        I read novels in my free time, 'Lean In' by Sheryl Sandberg, 
                        'The kite runner' by Khaled Hosseini are among my favourites.
                         And when I'm bored I do a little bit of sketching too.
                        </div>
                        </Header>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Segment>
        )
    }
}

export default About
