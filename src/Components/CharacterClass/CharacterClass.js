import React from 'react';
import './CharacterClass.css'
import DetailsModal from '../DetailsModal/DetailsModal';
import { Container,Col,Row } from 'react-bootstrap';

export default function CharacterClass({characterClasses,chooseClass,selectedClass}){
    const[defaultShown,setDefaultShown] = React.useState(selectedClass ? {text:selectedClass.name}:{text:'Select Class'})

    function returnSet(obj){
        setDefaultShown({...defaultShown,text:obj.name})
        chooseClass(obj);
    }
 
    return(
        <>
        <Container fluid>
            <Row>
                <Col>
                    <h2 className='text-center'> Class</h2>
                </Col>
            </Row>
            <Row>
                <Col className='detail-selector' md={{span:10,offset:2}}>
                    <DetailsModal object={characterClasses} returnSet={returnSet}/>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <h1><i className="fa-solid fa-wand-sparkles"></i></h1>
                </Col>
                <Col xs={10} md={{span:8,offset:2}} lg={{span:10,offset:0}} >     
                            {/** We create a drop down with options from the API for character Classes
                             * When a user selects a class we send a 'chooseClass' dispatch to the Store 
                             */}
                            <select className="character-select-box" value={defaultShown.text} onChange={ e => returnSet(characterClasses.filter( (charClass) => {return charClass.name === e.target.value})[0])}>
                            
                            <option value="Select Class" disabled >Select Class</option>
                            {/**
                             * We map through each of the classes returned by the API that are stored in our characterClasses which has been passed down as a prop.
                             * Each class is entered as a option using it's name key.
                             */}    
                            {characterClasses && characterClasses.map( (charClass) => {
                                return <option key={charClass.name} value={charClass.name} onClick={ () => chooseClass(charClass)}>{charClass.name}</option>
                            })}
                            </select>
                </Col>
            </Row>
        </Container>
        </>
    )
}