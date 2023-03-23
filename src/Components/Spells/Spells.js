import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { fetchSpells } from '../../Redux/actionCreator'
import './Spells.css'

export const Spells = ({selectedClass,fetchSpells}) => {
  useEffect(() => {
    fetchSpells(spellCastingTradition())
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
  
  console.log(selectedClass)

  return (
      <div className='spells-main'>
      {selectedClass ? selectedClass.name : 'Class Name Here'}
      
      </div>

  )
}
