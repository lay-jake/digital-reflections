import CharacterClass from "../CharacterClass/CharacterClass"
import CharacterName from "../CharacterName/CharacterName"
import CharacterLevel from "../CharacterLevel/CharacterLevel"
import CharacterStat from "../CharacterStat/CharacterStat"
import './CharacterOverview.css'
import CharacterAncestry from "../CharacterAncestry/CharacterAncestry"
import CharacterDetails from "../CharacterDetails/characterDetails"
import CharacterDiety from "../CharacterDiety/CharacterDiety"
import { Container,Row, Col } from "react-bootstrap"


export default function CharacterOverview (
    {characterClasses,selectClass,
    characterAncestries,selectAncestry,
    characterDieties,selectDiety,
    characterLevel,adjustLevel,
    characterStats,adjustStat}){

    return(
        <>
        <div className="main-body">
            <div className="generic-info">
                <Container fluid>
                {/**  First section on overview contains name/class/diety/ancestry/level
                 *    Will always load so we have REDUX store fetch these details on component load
                 */}
                    <Row>
                        <Col>
                            <h1 className="title-text">Character Identity</h1>
                        </Col>
                    </Row>
                    <Row> 
                        <Col sm={12} md={2}>
                            <CharacterName />
                        </Col>
                        <Col sm={12} md={3}>
                            <CharacterClass characterClasses={characterClasses.classes.results} chooseClass={selectClass} selectedClass={characterClasses.selectedClass}/>
                        </Col>
                        <Col sm={12} md={3}>
                            <CharacterAncestry ancestries={characterAncestries.ancestries.results} selectAncestry={selectAncestry} selectedAncestry={characterAncestries.selectedAncestry}/>
                        </Col>
                        <Col sm={12} md={3}>
                            <CharacterDiety characterDieties={characterDieties} selectDiety={selectDiety} selectedDiety={characterDieties.selectedDiety}/>
                        </Col>
                        <Col sm={12} md={2}>
                            <CharacterLevel charLevel={characterLevel} adjustLevel={adjustLevel}/>
                        </Col>
                    </Row>
              </Container>


                 
                {/**  Second section on overview contains some hard stats and saves
                 *    Will not always load so we have conditional renders inside to trigger when class AND ancestry are selected since we need both to compute
                 *    the stats.
                 */}
                <Container>
                    <Row>
                    <h1 className="title-text">Character Ability Scores</h1>
                    </Row>
                    <Row>
                        <div className="character-stats-area">
                                {Object.keys(characterStats).map( (stat) => {
                              
                                return(
                                  
                                        <CharacterStat key={stat} stat={stat} statValue={(characterStats[stat]).value} 
                                        adjustStat={adjustStat} statBonus={(characterStats[stat]).bonus}/>
                                
                                ) })}
                            </div>       
                    </Row>
                </Container>

            </div>
            {characterClasses.selectedClass && characterAncestries.selectedAncestry &&
                <div className="title-details-box">        
                    <h1 className="title-text">Character Details</h1>   
                    <h1 className="title-text">Saving Throws</h1> 
                </div>
            }
          
            <div className="character-details-section">                
                {/** Conditional Rendering here as HP is Unknown if no class is picked */}     
                {(characterClasses.selectedClass && characterAncestries.selectedAncestry) &&
                    <CharacterDetails hp={((characterClasses.selectedClass.system.hp + characterStats.constitution.bonus)
                                        * characterLevel) + characterAncestries.selectedAncestry.system.hp}
                                      ancestry={characterAncestries.selectedAncestry}  />
                }
          
        {/** Conditional Rendering here as Saving throws are not needed if no class is picked */}    
        {characterClasses.selectedClass && characterAncestries.selectedAncestry &&
        <>
            <div className="character-savingThrows">
                    <div className='character-savingThrow-ind'>
                        <h2> <i className="fa-solid fa-gauge-high"></i> Reflex</h2>
                        <p>{characterClasses.selectedClass.system.savingThrows.reflex + characterLevel + characterStats.dexterity.bonus}</p>
                    </div>
                    <div className='character-savingThrow-ind'>
                        <h2> <i className="fa-solid fa-hand-fist"></i> Fortitude</h2>
                        <p>{characterClasses.selectedClass.system.savingThrows.fortitude + characterLevel + characterStats.constitution.bonus}</p>
                    </div>
                    <div className='character-savingThrow-ind'>
                        <h2> <i className="fa-solid fa-brain"></i> Will</h2>
                        <p>{characterClasses.selectedClass.system.savingThrows.will + characterLevel + characterStats.wisdom.bonus}</p>
                    </div>
            </div>
            </>}
        </div>
        </div>
   
        </>
    )
}