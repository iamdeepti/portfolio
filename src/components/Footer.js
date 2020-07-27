import React, { Component } from 'react'
import {Divider} from 'semantic-ui-react';
import '../App.css';
export class Footer extends Component {
    render() {
        return (
            
            <div className='footer '>
                <Divider horizontal inverted className='Blue'>
                    <span className='footer-text'>
                Built and Designed by <a href='https://www.github.com/iamdeepti'>Deepti Singh</a></span>
                </Divider>
            </div>
           
        )
    }
}

export default Footer
