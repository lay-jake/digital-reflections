import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import parse from 'html-react-parser';
import './DetailsModal.css'
import { Container,Row,Stack } from 'react-bootstrap';


export default function DetailsModal({object,returnSet}){

    const [isModalOpen, setIsOpen] = React.useState(false);
    const [displayedObj,setDisplayedObj] = React.useState('');
    const parse = require('html-react-parser');

    function handleSubmit() {
        returnSet(displayedObj);
        closeModal();
        setDisplayedObj('');

    }
    function openModal() {
        setIsOpen(true);
      }
    
    
      function closeModal() {
        setIsOpen(false);
      }

     function showDetails(chosenObj){
        setDisplayedObj(chosenObj);
     }

    return(

      <>
      {object &&
      <Container>
        <Row>
          <Button className='details-button-overview' onClick={openModal}>
            Use Detailed Selector
          </Button>

              <Modal
                show={isModalOpen}
                onHide={closeModal}
                backdrop="static"
                keyboard={false}
                fullscreen={true}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{object[0].type === 'ancestry'? 'Select Ancestry':'Select Class'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Stack className='obj-container' direction='horizontal'>
                        <Stack direction='vertical'>
                            <div className="obj-list" style={{overflowY: 'scroll', height:'80%'}}>
                            {object.map( (obj) => {
                                        return <p className={displayedObj.name === obj.name ?
                                        'class-select-active' : 'class-select-inactive'} key={obj.name} onClick={() => showDetails(obj)}>{obj.name} </p>
                                    })}
                            </div>
                        </Stack>
                      
                        {displayedObj !== '' &&
                                    <div className="obj-description">
                                    {parse(displayedObj.system.description.value)}</div>}
                      
                </Stack>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={closeModal}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={()=> handleSubmit()}>
                    Select
                  </Button>
                </Modal.Footer>
              </Modal>
        </Row>
      </Container>}       
    </>
  );
}
