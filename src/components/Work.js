import React, { Component } from 'react'
import { Card, CardMeta} from 'semantic-ui-react';
export class Work extends Component {
    render() {
    
        return (
            <div id='work' className='section'>
                <h1 className='sub-heading'><span className='Green numbers'>02.</span>Where I've worked?</h1>
				
      <Card.Group itemsPerRow={2} stackable>
					<Card className=" card" raised>
						<Card.Content extra>
							
						</Card.Content>
						<Card.Content>
							<Card.Header>
								ROYAL BANK OF SCOTLAND
							</Card.Header>
                            <CardMeta>Technology Intern | May’20-Jul’20
</CardMeta>
							<Card.Description >
                            Automated various manual tasks using python.
Worked closely with the Dev team and implemented Keyboard accessibility guidelines and NatWest’s UI guideline on the portal for requesting resource. 
Added enhancements to some confluence pages of the Team.
</Card.Description>
						</Card.Content>
						<Card.Content extra>
							
						</Card.Content>
					</Card>
					
					<Card className=" card" raised>
						<Card.Content extra>
							
							
						</Card.Content>
						<Card.Content>
							<Card.Header>
								MORAI TECHNOLOGIES
							</Card.Header>
                            <CardMeta>
                            Intern | Sep’18-Oct’18
                            </CardMeta>
							<Card.Description >
                            As a POC developed an online shopping portal using PHP and integrated Paytm for payments and Implemented all the basic functionality like shopping cart, favourites, admin portal from where more products could be added.

							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							
						</Card.Content>
					</Card>
				</Card.Group>
      </div>
        )
    }
}

export default Work
