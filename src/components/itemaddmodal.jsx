import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";

const ItemAddModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Item
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        {/*         <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header> */}
        <Modal.Body>To be completed</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemAddModal;
