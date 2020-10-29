import React, { Component } from "react";
import "../App.css";
import { Button, Card, Icon } from "semantic-ui-react";
import axios from "axios";
function ProjectCards(props) {
  const {
    name,
    description,
    html_url,
    forks,
    stargazers_count,
    homepage,
    language,
  } = props.info;
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name="bookmark outline" color="teal"></Icon>
          {name}
          <Button floated="right" icon>
            <a href={homepage}>
              <Icon name="external alternate" size="small"></Icon>
            </a>
          </Button>
          <Button floated="right" icon>
            <a href={html_url}>
              <Icon name="github"></Icon>
            </a>
          </Button>
          {/* <Icon name="github" link corner='top right' color='teal'></Icon> */}
        </Card.Header>
        <Card.Description>
          {description}
        </Card.Description>
        <div >
          <span
            className="Blue"
            style={{ marginRight: "16px", fontSize: "12px" }}
          >
            {language}
          </span>
          {stargazers_count > 0 && (
            <span className="Green" style={{ fontSize: "12px" }}>
              <Icon name="star outline" size="small"></Icon>
              {stargazers_count}
            </span>
          )}
          {forks > 0 && (
            <span
              className="Green"
              style={{ marginLeft: "16px", fontSize: "12px" }}
            >
              <Icon name="fork" size="small"></Icon>
              {forks}
            </span>
          )}
        </div>
      </Card.Content>
    </Card>
  );
}
export class Projects extends Component {
  state = {
    projects: [],
    repos: [
      "shecure",
      "online-store",
      "portfolio",
      "ml-algorithms",
      "speed-test",
    ],
  };
  componentDidMount() {
    this.getRepos();
  }
  getRepos = async () => {
    const temp = [];
    for (let i in this.state.repos) {
      let res = await axios.get(
        `https://api.github.com/repos/iamdeepti/${this.state.repos[i]}`
      );
      temp.push(res.data);
    }
    this.setState({ projects: temp });
    console.log(this.state.projects[0]);
  };
  render() {
    return (
      <div className="section" id="projects">
        <h1 className="sub-heading">
          <span className="Green numbers">03.</span>Some Things I've Built
        </h1>
        <div>
          <Card.Group itemsPerRow={2} stackable>
            {Object.keys(this.state.projects).map((key, i) => (
              <ProjectCards info={this.state.projects[key]} key={i} />
            ))}
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default Projects;
