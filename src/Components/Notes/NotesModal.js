import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import { Container,Row,Col } from 'react-bootstrap';
import './NotesModal.css'

export default function NotesModal({addNewNote,isOpen,setIsOpen}){

    const [text,setText] = useState('');
    const [title,setTitle] = useState('');
    
function handleSubmit() {
    addNewNote({title:title,text:text});
    setIsOpen(false);
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
                        <input className="note-title" placeholder='Type note title here.' onChange={ (e) => setTitle(e.target.value)}/>
                        </Col>
                    </label>
                    </Row>
                    <Row className="note-details">
                    <label>
                    Note Details:
                        <Col>
                        <textarea className="note-details" placeholder='Type note here.' onChange={ (e) => setText(e.target.value)}/>
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