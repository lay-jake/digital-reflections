import Modal from "react-modal";
import React from "react";
import parse from 'html-react-parser';
import './DetailsModal.css'


export default function DetailsModal({object,returnSet}){

    const [modalIsOpen, setIsOpen] = React.useState(false);
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
    <div>
            <button className='details-button-overview' onClick={openModal}>Use Detailed Selector</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Selection"
                ariaHideApp={false}
            >     
                <div>
                    <button className='modal-exit-buttons exit' onClick={closeModal}> Close </button>
                    <button className='modal-exit-buttons select' onClick={()=> handleSubmit()}>Select</button>
                </div>
                <div className="modal-container">
        
                    <div className="obj-list" style={{overflowY: 'scroll', height:'auto', width:'7%'}}>
                    {object.map( (obj) => {
                            return <p className={displayedObj.name === obj.name ? 'class-select-active' : 'class-select-inactive'} key={obj.name} onClick={() => showDetails(obj)}>{obj.name} </p>
                        })}
                    </div>
                    {displayedObj !== '' &&
                            <div className="obj-description">
                            {parse(displayedObj.system.description.value)}
                            </div>
                    } 
                </div>

            </Modal>
    </div>
    )}