import { useState } from "react"
import NotesModal from "./NotesModal";
import './Notes.css'
import {Container, Row, Col } from "react-bootstrap";

export default function Notes({addNote,notes,deleteNote}){

    const [isOpen,setIsOpen] = useState(false);

    console.log(notes.Notes)

    return(
                <div className="notes-field-main">
                    <Container>
                        <Row>
                            <Col xs={{span:6,offset:4}}>
                                <button className="add-note" onClick={() => setIsOpen(!isOpen)}> Add new Note</button>
                            </Col>
                        </Row>
                    <NotesModal addNewNote={addNote} isOpen={isOpen} setIsOpen={setIsOpen}/>
                        {notes.Notes.length > 0 && notes.Notes.map( (note) => {
                            return(
                                <Row key={note.title} className='notes-ind'>
                                    <Col xs={10} md={11}>
                                        <h1>{note.title}</h1>
                                        <p>{note.text}</p>
                                    </Col>
                                    <Col xs={1}>
                                        <button className="delete-button" onClick={ () => deleteNote(note)}> Delete </button>
                                    </Col>   
                                </Row>    
                            )
                        })}
                    </Container>
                </div>
            )
        
    } 
