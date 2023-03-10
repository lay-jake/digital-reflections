import CharacterClass from "../CharacterInformation/CharacterClass/CharacterClass"
import CharacterName from "../CharacterInformation/CharacterName/CharacterName"
import CharacterLevel from "../CharacterInformation/CharacterLevel/CharacterLevel"
import CharacterStat from "../CharacterInformation/CharacterStat/CharacterStat"
import './CharacterOverview.css'
import CharacterAncestry from "../CharacterInformation/CharacterAncestry/CharacterAncestry"
import CharacterDetails from "../CharacterInformation/CharacterDetails/characterDetails"
import CharacterDiety from "../CharacterInformation/CharacterDiety/CharacterDiety"
import { Container,Row, Col } from "react-bootstrap"
import CharFeatures from "../CharacterInformation/CharFeatures/CharFeatures"
import CharacterFeats from "../CharacterInformation/CharacterFeats/CharacterFeats"


export default function CharacterOverview (
    {characterClasses,selectClass,
    characterAncestries,selectAncestry,getAncestryFeature,deleteAncestryFeatures,
    characterDieties,selectDiety,
    characterLevel,adjustLevel,
    characterStats,adjustStat,
    knownFeats}){

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
                            <CharacterAncestry ancestries={characterAncestries.ancestries.results} selectAncestry={selectAncestry} 
                            selectedAncestry={characterAncestries.selectedAncestry} getAncestryFeature={getAncestryFeature} deleteAncestryFeatures={deleteAncestryFeatures}/>
                        </Col>
                        <Col sm={12} md={3}>
                            <CharacterDiety characterDieties={characterDieties} selectDiety={selectDiety} selectedDiety={characterDieties.selectedDiety}/>
                        </Col>
                    </Row>
                    <Row>
                        <div className="character-level-box">
                            <Col>
                                <CharacterLevel charLevel={characterLevel} adjustLevel={adjustLevel}/>
                            </Col>
                        </div>
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
                    <Row className="stats-box" sm={1} md={3} lg={4}>
                                {Object.keys(characterStats).map( (stat) => {
                              
                                return(
                                  
                                        <CharacterStat key={stat} stat={stat} statValue={(characterStats[stat]).value} 
                                        adjustStat={adjustStat} statBonus={(characterStats[stat]).bonus}/>
                                
                                ) })}
                    </Row>
                </Container>                      
            </div>

        {/** Conditional Rendering here as HP is Unknown if no class is picked */}                                 
        {characterClasses.selectedClass && characterAncestries.selectedAncestry && 
        <Container>
            <Row xs={1} md={6}>
                <Col md={{span:5,offset:0}}>
                <h1 className="title-text">Character Details</h1>                
                    {/** Conditional Rendering here as HP is Unknown if no class is picked */}     
                   
                    <CharacterDetails hp={((characterClasses.selectedClass.system.hp + characterStats.constitution.bonus)
                                         * characterLevel) + characterAncestries.selectedAncestry.system.hp}
                                        ancestry={characterAncestries.selectedAncestry}  />
                </Col> 
                <Col md={{span:5,offset:1}}>
                  <h1 className="title-text">Saving Throws</h1> 
                    <div className="character-savingThrows">    
                        <div className='character-savingThrow-ind'>
                            <h2> <i className="fa-solid fa-gauge-high"></i> Reflex</h2>
                            <p>{characterClasses.selectedClass.system.savingThrows.reflex + characterLevel + characterStats.dexterity.bonus}</p>
                        </div>
                        <div className='character-savingThrow-ind'>
                            <h2> <i className="fa-solid fa-hand-fist"></i> Fort</h2>
                            <p>{characterClasses.selectedClass.system.savingThrows.fortitude + characterLevel + characterStats.constitution.bonus}</p>
                        </div>
                        <div className='character-savingThrow-ind'>
                            <h2> <i className="fa-solid fa-brain"></i> Will</h2>
                            <p>{characterClasses.selectedClass.system.savingThrows.will + characterLevel + characterStats.wisdom.bonus}</p>
                        </div>
                    </div>
                </Col>
            </Row>    
        </Container>}
        <Container>
            <Row xs={1} sm={1}>
                <Col md={{span:5,offset: 1}}>
                    <CharFeatures selectedClass={characterClasses.selectedClass} characterLevel={characterLevel} />
                </Col>
                <Col md={{span:5,offset:1}}>
                    {characterClasses.selectedClass && <CharacterFeats knownFeats={knownFeats} />}
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}