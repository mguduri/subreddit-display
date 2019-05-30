import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalPopup = ({ title, body, showModal, hideModal }) => {
  return (
    <Modal
      show={showModal}
      onHide={hideModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h6>{title}</h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <small id="modal-popup-body">{body}</small>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hideModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPopup;
