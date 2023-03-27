import parse from 'html-react-parser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function FeatsModal({selectedFeat,isOpen,closeModal,selectFeat}){
    const parse = require('html-react-parser');

    function handleSubmit() {
        selectFeat(selectedFeat);
        closeModal();
    }

    if(selectedFeat.system){

        return(<>
         <Modal
                show={isOpen}
                onHide={closeModal}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                    <Modal.Title>{selectedFeat.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>         
                    {parse(selectedFeat.system.description.value)}

                    {selectedFeat.system.prerequisites.value.length && <p>Requires : {selectedFeat.system.prerequisites.value[0].value}</p>}
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Add Feat
                        </Button>
                </Modal.Footer>
              </Modal>
        </>)
    }else{
    return(
    <></>
    )}
}