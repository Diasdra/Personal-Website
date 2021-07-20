import React, { Component } from "react";
import { Menu, Segment, Grid } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem: "about" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted textAlign='center' padded>
        <Grid columns='equal'textAlign='center'>
          <Menu stackable inverted secondary pointing size='mini'>
            <Menu.Item
              name="about"
              active={activeItem === "about"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="projects"
              active={activeItem === "projects"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid>

      </Segment>
    );
  }
}
