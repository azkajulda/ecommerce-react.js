import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Cart = (props) => {
  const {
    buttonLabel = "Login",
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle_modal = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle_modal}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle_modal={toggle_modal} className={className}>
        <ModalHeader toggle_modal={toggle_modal}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle_modal}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle_modal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Cart;