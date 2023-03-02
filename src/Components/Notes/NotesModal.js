import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import { Container,Row,Col } from 'react-bootstrap';
import './NotesModal.css'

export default function NotesModal(){

    const [isOpen,setIsOpen] = useState(true);
    
function handleSubmit() {
}
function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }


    return(
        <Modal
        show={isOpen}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Enter Note Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
                <Row  className="note-title">
                <label>
                Note Title:
                    <Col >
                    <input className="note-title" placeholder='Type note title here.'/>
                    </Col>
                </label>
                </Row>
                <Row className="note-details">
                <label>
                Note Details:
                    <Col>
                    <textarea className="note-details" placeholder='Type note here.'/>
                    </Col>
                </label>
                </Row>
            </Container>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
                Close
            </Button>
            <Button variant="primary" onClick={()=> handleSubmit()}>
                Save Note
            </Button>
            </Modal.Footer>
        </Modal>
    )
}