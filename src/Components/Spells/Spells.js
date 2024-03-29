import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Loading } from '../Loading/Loading'
import './Spells.css'
import SpellsModal from './SpellsModal'

export const Spells = ({selectedClass,fetchSpells,spellsLibrary,selectSpell}) => {

  const [selectedSpell,setSelectedSpell] = useState([]);
  const [isModalOpen, setIsOpen] = useState(false);
  
  /**
   * On comp load will use the selected class to call API and try and pull all spells related to that classes spell casting ability.
   * No support currently for anything outside of the four main schools.
   * 
   *  */  
  useEffect(() => {
    if(selectedClass){
    fetchSpells(spellCastingTradition())
    }
  }, [selectedClass])

 /**
  * Function to check what spellcasting tradition a class should use, need to implement something for 
  * Sorc/witches/summoners since they can use multiple types of magic base on their character creation process
  * Maybe a drop down?
  * 
  * @returns String - tradition to parse API with
  */
  const spellCastingTradition = () =>{
    switch (selectedClass.name) {
      case 'Wizard'  || 'Magi': 
        return ('arcane')
        break;
      case 'Cleric' || 'Champion':
        return ('divine')
        break;
      case 'Druid':
        return ('primal')
        break;
      case 'Bard' || 'Pyschic':
        return ('occult')
        break;
      default:
        break;
}}

const handleClick = (spell) => {
  setSelectedSpell(spell);
  setIsOpen(true)
}

const closeModal = () =>{
  setIsOpen(false);
}

  console.log(spellsLibrary)

  if (selectedClass && !spellsLibrary.isLoading && (spellsLibrary.spells.length > 0)){
    return (
        <div className='spells-main'>
          <Container fluid>
            <Row>
              <Col>
                <h1 className='spells-heading'>{selectedClass.name} Repertoire</h1>
              </Col>
            </Row>
            <Row xs={2} md={4} lg={6}>  
              {spellsLibrary.spells.map( spell => {
                return (
                  <Col key={spell.id} className="spells-ind" onClick={() => handleClick(spell)}>
                    <Row>
                      <p>{`${spell.name} - (${spell.system.components.material ? ' M' : ''} ${spell.system.components.verbal ? 'V' : ''} ${spell.system.components.somatic ? 'S' : ''} )`}</p>
                    </Row>
                    <Row>
                      <p> {`Spell Level: ${spell.system.level.value}`}</p>
                    </Row>
                  </Col>
                )
              })}
            </Row>
          </Container>
          {selectedSpell && <SpellsModal selectedSpell={selectedSpell} isOpen={isModalOpen} closeModal={closeModal} selectSpell={selectSpell}/>}
        </div>
  )
}else if (!selectedClass){
  return(
    <div className='spells-main'>
      <h1 className='text-center'> Class Must be Selected before Spell Repertoire can be loaded.</h1>
    </div>
  )

}else if (spellsLibrary.spells.length === 0){
  return(
    <div className='spells-main'>
      <h1 className='text-center'> Currently no support for {selectedClass.name} spellbook, sorry.</h1>
    </div>
  )
}else{
    return (
      <div className='spells-main'>
          <Loading/>
      </div>
  )
  }
}
