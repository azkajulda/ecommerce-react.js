import React, { useState } from 'react'
import {
    Collapse,
    Button,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
  import './navbar.css'

const Main_navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed" color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">LTW Store</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/books">Books Collection</NavLink>
            </NavItem>
          </Nav>
          <Button outline color="primary"><i className="fa fa-user-circle"> Login</i></Button>
          {/* <NavbarText>Hi, Mohamad Azka Julda S</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}
    

export default Main_navbar
