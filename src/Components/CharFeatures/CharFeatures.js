import parse from 'html-react-parser';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react"
import { Container, Row,Col, Modal,Stack } from "react-bootstrap"
import instance from "../../Shared/api"
import './CharFeatures.css'

export default function CharFeatures({selectedClass, characterLevel}){

    const [selectedFeature,setSelectedFeature] = useState([]) 
    const [isModalOpen, setIsOpen] = React.useState(false);
    const parse = require('html-react-parser');

    const closeModal = () =>{
        setSelectedFeature([]);
        setIsOpen(false);
    }

    const handleClick = async (name) => {

        //Calling API using ASYNC - We use some REGEX to replace/remove any feat that has (text in a parenthes) - the API doesn't handle it well
        //However since we are filter below we still end up with a single result
        
        await instance.get('classFeature?name='+name.replace(/\([^()]*\)/g, ''))

        //We convert the response into Key:Value pairs, then filter those results to match name exactly.
        // Unfortunately PF2API does not have a way to specify 'exact' match only at this time.
        // We return feature[1] since feature[0] is total results, then we use [0][1] so we can isolate the returned object from it's nestings

        .then(res => ( setSelectedFeature( Object.entries(res.data.results).filter( (feature) => { return feature[1].name === name})[0][1])))

        /** TO DO - BETTER ERROR HANDLING */
        .catch(error => console.log(error))
       setIsOpen(true)
    }
    console.log(selectedFeature)
    return(
        <>
        {selectedClass && characterLevel &&
        <Container >
            <Row xs={2}>
            <h2 className='text-center subtitle-text'>Class Features</h2>
            </Row>
            <Row>
                <Col xs={6}>
                {/**
                 * Filter our class selected to see what class features would be available at our current level
                 * Return that as an array.
                 */}
                {Object.entries(selectedClass.system.items)
                    .map( (feature) => {
                        if(feature[1].level <= characterLevel){
                        return (
                            <div key={feature[1].name}>
                                <h2 className={'character-features-ind text-center'} title='Click for details' onClick={ () => handleClick (feature[1].name)}> {feature[1].name}</h2>
                            </div>
                        )}
                    })
                }
                </Col>
            </Row>
        </Container>}

        {selectedFeature.length !== 0 &&
           <Modal
           show={isModalOpen}
           onHide={closeModal}
           backdrop="static"
           keyboard={false}
         >
            <Modal.Header closeButton>
                <Modal.Title>{selectedFeature.name} - {selectedFeature.system.actionType.value.substring(0,1).toUpperCase() + selectedFeature.system.actionType.value.substring(1)}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {parse(selectedFeature.system.description.value)}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={closeModal}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>

        }
        </>
    )

}