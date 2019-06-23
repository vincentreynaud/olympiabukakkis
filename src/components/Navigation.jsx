import React, { Component } from "react";
import { Link } from "gatsby";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import Scrollspy from "react-scrollspy";

import { capitalise } from "../helpers/es6";
import "../scss/Navigation.scss";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleActiveClass = e => {
    e.target.classList.includes("active") ? e.target.classList.remove("active") : e.target.classList.add("active");
  };

  render() {
    const { title } = this.props;

    return (
      <Navbar expand="xl" className="flex-column align-items-start">
        <div className="d-flex justify-content-between align-items-center w-100">
          <NavbarBrand href="/about">{title}</NavbarBrand>
          <NavbarToggler onClick={this.toggle}>MENU</NavbarToggler>
        </div>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Scrollspy items={["works", "events"]} className="navbar-nav ml-auto nav-list" currentClassName="active">
            <NavItem>
              <Link className="nav-link" to="#works" activeClassName="active">
                Work
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/events" activeClassName="active">
                Events
              </Link>
            </NavItem>
          </Scrollspy>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

// {links.map((link, i) => (
//   <NavItem key={i}>
//     <Link className="nav-link" to={`/${links[i]}`} activeClassName="active">
//       {capitalise(link)}
//     </Link>
//   </NavItem>
// ))}
