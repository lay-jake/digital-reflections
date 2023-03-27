import parse from 'html-react-parser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SpellsModal({selectedSpell,isOpen,closeModal,selectSpell}){
    const parse = require('html-react-parser');

    function handleSubmit() {
        selectSpell(selectedSpell);
        closeModal();
    }

    if(selectedSpell.system){
        console.log(selectedSpell)
        return(<>
         <Modal
                show={isOpen}
                onHide={closeModal}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                    <Modal.Title>{`${selectedSpell.name} - (${selectedSpell.system.components.material ? ' M' : ''} ${selectedSpell.system.components.verbal ? 'V' : ''} ${selectedSpell.system.components.somatic ? 'S' : ''} )`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {`School: ${selectedSpell.system.school.value ? selectedSpell.system.school.value.slice(0,1).toUpperCase() + selectedSpell.system.school.value.slice(1)  : "None"}`}<br/><br/>   
                    {`Level: ${selectedSpell.system.level.value ? selectedSpell.system.level.value : "None"}`}<br/><br/>    
                    {`Duration: ${selectedSpell.system.duration.value ? selectedSpell.system.duration.value : "None"}`}<br/><br/>       
                    {parse(selectedSpell.system.description.value)}
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Add Spell
                        </Button>
                </Modal.Footer>
              </Modal>
        </>)
    }else{
    return(
    <></>
    )}
}