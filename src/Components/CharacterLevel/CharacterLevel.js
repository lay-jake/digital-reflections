import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './CharacterLevel.css'
export default function CharacterLevel({charLevel,adjustLevel}){

    /**
     * 
     * @param {*} value - '+' or '-' indicates whether we will raise or lower the level of the character
     * @returns  - no return since the function is sent to modify the REDUX store.
     */
    const handleChange = (value) =>{
        switch(value){
            case '-':
                //We do not let the User lower the level of the Character to below 1
                if(charLevel > 1){
                    adjustLevel(value);
                }
                break;
            case '+':
                //We do not let the User raise the level of the Character to above 20
                if(charLevel < 20){
                    adjustLevel(value);
                }
                break;
            default:
                return null;
        }
    }
    return(
        <>
        <Container fluid>
            <div className="character-level-area">
                <Row md={12}>
                  <h1 className="text-center"> Level</h1>
                </Row>
                <Row>
                    <div className="level-adjust-box">
                {/* xs={{span:2,offset:3}} sm={{span:2,offset:0}} lg={{span:2,offset:1}}  xs={{span:2,offset:0}} sm={{span:2,offset:2}}xs={{span:2}} sm={{span:2,offset:1}*/}
                        <Col className="text-center" >
                            <button className="level-adjust-button" onClick={() => handleChange('-')}>-</button>
                        </Col>
                        <Col className="text-center">
                            <h2>{charLevel}</h2>
                        </Col>
                        <Col className="text-center">
                            <button className="level-adjust-button" onClick={() => handleChange('+')}>+</button>
                        </Col>
                    </div>
                </Row>
            </div>
       </Container>
        </>
    )
}