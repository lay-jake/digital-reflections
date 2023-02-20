import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import './CharacterStat.css'



export default function CharacterStat({stat,statValue,adjustStat,statBonus}){

    /**
     * 
     * @param {*} value - '+' or '-' as needed to be increasing or decreasing the stat.
     * stat for this component is given from props
     */
    const handleChange = (value) =>{
        if(statValue > 1 || value !== '-'){
            adjustStat(stat,value);
        }
    }

    return(
        <>
            <Container>
                <div className="character-stat-indvidual">
                    <Row>
                    <div className="character-stat-bonus">
                        {/** Some logic to check if the bonus is going to be more then 0 - if so we add a '+' symbol to match PF2 standards to show explicitly a positive bonus */}
                        <p>BONUS : ( {statValue> 11 ? '+' : ''}{statBonus} )</p>    
                    </div>
                    </Row>
                    <Row>
                    <div className="character-stat-adjust">
                        <Col xs-sm-md-lg={{span:2}}>
                           <button className="stat-adjust-button" onClick={() => handleChange('-')}>-</button>
                        </Col>
                        <Col xs-sm-md-lg={{span:8}}>
                            {/** We make it uppercase because it just looks better, and the API has it as all lowercase */}
                            <h1>{stat.toUpperCase()}</h1>
                        </Col>
                        <Col xs-sm-md-lg={{span:2}}>
                             <button className="stat-adjust-button" onClick={() => handleChange('+')}>+</button>
                        </Col>
                    </div>
                    </Row>
                    <Row>
                    <div>
                        <p className="character-stat-value">Score : {statValue}</p>
                    </div>
                    </Row>
                </div>
            </Container>
        </>
    )
}