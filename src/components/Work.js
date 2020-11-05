import React, { Component } from "react";
import { Responsive, Tab } from "semantic-ui-react";
const panes = [
  {
    menuItem: "Royal Bank of Scotland",
    render: () => (
      <Tab.Pane>
        <span className="White">Technology Intern | May’20-Jul’20 </span>
        <br />
        <br />
        Automated various manual tasks using python. Worked closely with the Dev
        team and implemented Keyboard accessibility guidelines and NatWest’s UI
        guideline on the portal for requesting resource. Added enhancements to
        some confluence pages of the Team.
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Morai Technologies",
    render: () => (
      <Tab.Pane>
        <span className="White">Intern | Sep’18-Oct’18</span>
        <br />
        <br />
        As a POC developed an online shopping portal using PHP and integrated
        Paytm for payments and Implemented all the basic functionality like
        shopping cart, favourites, admin portal from where more products could
        be added.
      </Tab.Pane>
    ),
  },
];
const panesSmall = [
	{
	  menuItem: "RBS",
	  render: () => (
		<Tab.Pane>
		  <span className="White">
			  Royal Bank of Scotland <br/>
			  Technology Intern | May’20-Jul’20 </span>
		  <br />
		  <br />
		  Automated various manual tasks using python. Worked closely with the Dev
		  team and implemented Keyboard accessibility guidelines and NatWest’s UI
		  guideline on the portal for requesting resource. Added enhancements to
		  some confluence pages of the Team.
		</Tab.Pane>
	  ),
	},
	{
	  menuItem: "Morai Tech",
	  render: () => (
		<Tab.Pane>
		  <span className="White">Intern | Sep’18-Oct’18</span>
		  <br />
		  <br />
		  As a POC developed an online shopping portal using PHP and integrated
		  Paytm for payments and Implemented all the basic functionality like
		  shopping cart, favourites, admin portal from where more products could
		  be added.
		</Tab.Pane>
	  ),
	},
  ];
export class Work extends Component {
  render() {
    return (
      <div id="work" className="section">
        <h1 className="sub-heading">
          <span className="Green numbers">02.</span>Where I've worked?
        </h1>
		<Responsive minWidth = {600}>
        <Tab
          menu={{ fluid: true, vertical: true, tabular: true }}
          panes={panes}
        />
		</Responsive>
		<Responsive maxWidth = {600}>
        <Tab
          menu={{ fluid: true, vertical: false, tabular: true }}
          panes={panesSmall}
        />
		</Responsive>
      </div>
    );
  }
}

export default Work;
