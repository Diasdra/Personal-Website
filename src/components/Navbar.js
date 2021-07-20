import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem: "about" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="project"
            active={activeItem === "project"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}


