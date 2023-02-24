
//says import is not used but it is and will brick if removed.
import parse from 'html-react-parser';
import Button from 'react-bootstrap/Button';
import React,{useState} from "react";
import { Container, Row,Col, Modal} from "react-bootstrap";
import './CharacterFeats.css';



export default function CharacterFeats({knownFeats}){

    const [selectedFeat,setSelectedFeat] = useState([]) 
    const [isModalOpen, setIsOpen] = useState(false)
    const parse = require('html-react-parser');

    const closeModal = () =>{
        setSelectedFeat([]);
        setIsOpen(false);
    }
    const handleClick = (feat) =>{
        setSelectedFeat(feat);
        setIsOpen(true);
    }
return(
<>
<Container>
    <Row xs={2}>
        <Col xs={{span:8,offset:3}} sm={{span:8,offset:2}}>
        <h2 className='subtitle-text'>Known Feats</h2>
        </Col>
    </Row>
    <Row>
        <Col xs={6}>
        {/**
         * Filter our class selected to see what class features would be available at our current level
         * Return that as an array.
         */}
        {knownFeats.map( (feat) => {
                
                return (
                    <div key={feat.name}>
                        <h2 className={'character-feats-ind text-center'} title='Click for details' onClick={ () => handleClick(feat)}> {feat.name}</h2>
                    </div>
                )
            })
        }
        </Col>
    </Row>
</Container>

{selectedFeat.length !== 0 &&
<Modal
show={isModalOpen}
onHide={closeModal}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
    <Modal.Title>{selectedFeat.name}</Modal.Title>
</Modal.Header>
<Modal.Body>
    {parse(selectedFeat.system.description.value)}
</Modal.Body>
<Modal.Footer>
    <Button variant="primary" onClick={closeModal}>
    Close
    </Button>
</Modal.Footer>
</Modal>
}
</>
)}