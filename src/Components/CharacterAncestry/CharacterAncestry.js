import DetailsModal from '../DetailsModal/DetailsModal'
import React from 'react'
import './CharacterAncestry.css'
import { Row,Col, Container } from 'react-bootstrap'

export default function CharacterAncestry({ancestries,selectAncestry,selectedAncestry}){

    const[defaultShown,setDefaultShown] = React.useState(selectedAncestry ? {text:selectedAncestry.name}:{text:'Select Ancestry'})

    function returnSet(obj){
        setDefaultShown({...defaultShown,text:obj.name})
        selectAncestry(obj);
    }
 
    return(
    <>
    <Container>
        <Row>
            <Col>
                <h2 className='text-center subtitle-text'>Ancestry</h2>
            </Col>
        </Row>
     
        <Row>
            <Col md={{span:10,offset:2}}>
                 <DetailsModal object={ancestries} returnSet={returnSet}/>
            </Col>
        </Row>
        <Row>
            <Col xs={2} sm={2}>
                <h1><i className="fa-solid fa-person-burst"></i></h1>
            </Col>
            <Col xs={10} md={{span:8,offset:2}} lg={{span:10,offset:0}} >
                {/** We create a drop down with options from the API for character ancestries
                 * When a user selects a ancestry we send a 'selectAncestry' dispatch to the Store by filtering the ancestry OBJ Array to match the value of the selected ancestry.
                 * We use [0] since it should be the first result returned from the filter.
                 */}

                <select className="ancestry-select-box" value={defaultShown.text} onChange={ e => returnSet(ancestries.filter( (ancestry) => {return ancestry.name === e.target.value})[0])}>
                <option value="Select Ancestry" disabled>Select Ancestry</option>
                {/**

                onClick={ () => selectAncestry(charAncestry)} 
                * We map through each of the ancestries returned by the API that are stored in our ancestries which has been passed down as a prop.
                * Each ancestry is entered as a option using it's name key.
                */}    
                {ancestries && ancestries.map( (charAncestry) =>{
                    return (
                    <option  key={charAncestry.name} className= 'tooltip' value={charAncestry.name}>  {charAncestry.name} </option>
                )})}
                </select>
            </Col>
        </Row>
    </Container>
      </>
    )
}