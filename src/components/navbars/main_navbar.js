import React, { useState } from 'react'
import {
    Collapse,
    Button,
    Navbar,
    // NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Modal, ModalHeader, ModalBody, ModalFooter, Form,
    FormGroup, Label, Input, FormText
  } from 'reactstrap';
  import { BrowserRouter as Router, Link } from 'react-router-dom';
  import './navbar.css'

const Main_navbar = (props) => {
  
  const {
    buttonLabel,
    className
  } = props;

  // const [isOpen, setIsOpen, modal, setModal] = useState(false);
  const [modal, setModal] = useState(false);
  const modal_toggle = () => setModal(!modal);      
  // const nav_toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed" color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">LTW Store</NavbarBrand>
        {/* <NavbarToggler onClick={nav_toggle} /> */}
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/books">Books Collection</NavLink>
            </NavItem>
          </Nav>
          <Button outline color="info" className="navbar-space"><i className="fa fa-shopping-cart"></i></Button>
          <Button outline color="info"><i className="fa fa-user-circle" onClick={modal_toggle}> {buttonLabel}Login</i></Button>
          {/* <NavbarText>Hi, Mohamad Azka Julda S</NavbarText> */}
        </Collapse>
      </Navbar>

      {/* Login */}
      <Modal isOpen={modal} modal_toggle={modal_toggle} className={className}>
        <ModalHeader modal_toggle={modal_toggle}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="example@gmail.com" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="*************" />
            </FormGroup>
            <FormText color="muted">
              New Member? <a href="">Register</a> here
            </FormText>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={modal_toggle}>Login</Button>{' '}
          <Button color="secondary" onClick={modal_toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
    
export default Main_navbar