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
            <Container className='character-stat-indvidual text-center'>
                    <Row>
                        {/** Some logic to check if the bonus is going to be more then 0 - if so we add a '+' symbol to match PF2 standards to show explicitly a positive bonus */}
                        <p>BONUS : ( {statValue> 11 ? '+' : ''}{statBonus} )</p>    
                    </Row>
                    <Row>
                        <Col>
                           <button className="stat-adjust-button" onClick={() => handleChange('-')}>-</button>
                        </Col>
                        <Col>
                            {/** We make it uppercase because it just looks better, and the API has it as all lowercase */}
                            <h1>{stat.toUpperCase().substring(0,3)}</h1>
                        </Col>
                        <Col>
                             <button className="stat-adjust-button" onClick={() => handleChange('+')}>+</button>
                        </Col>
                    </Row>
                    <Row>
                        <p className="character-stat-value">Score : {statValue}</p>
                    </Row>
      
            </Container>
        </>
    )
}