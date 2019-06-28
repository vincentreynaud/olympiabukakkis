import React, { Component } from "react";
import { Link } from "gatsby";
import Scrollspy from "react-scrollspy";
import classnames from "classnames";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";

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
    const { title, hideNav = false, scaleUp } = this.props;

    return (
      <Navbar expand="xl" className="flex-column align-items-start">
        <div className="d-flex justify-content-between align-items-center w-100">
          <NavbarBrand style={scaleUp && { fontSize: "7.2rem" }} href="/about">
            {title}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}>MENU</NavbarToggler>
        </div>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Scrollspy
            items={["work", "events"]}
            className="navbar-nav ml-auto nav-list"
            currentClassName="active"
            offset={800}
          >
            <NavItem>
              <Link
                className={classnames({ "nav-link": true, bottom: true, hide: hideNav })}
                to="#work"
                activeClassName="active"
              >
                Work
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className={classnames({ "nav-link": true, top: true, hide: hideNav })}
                to="/events"
                activeClassName="active"
              >
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
