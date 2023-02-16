import { Component } from "react"
import { adjustLevel, fetchClasses,getLevel,selectClass,getStat, adjustStat,fetchAncestries,selectAncestry } from "../../Redux/actionCreator"
import {connect} from 'react-redux'
import CharacterClass from "../CharacterClass/CharacterClass"
import CharacterName from "../CharacterName/CharacterName"
import CharacterLevel from "../CharacterLevel/CharacterLevel"
import CharacterStat from "../CharacterStat/CharacterStat"
import './main.css'
import CharacterAncestry from "../CharacterAncestry/CharacterAncestry"
import CharacterDetails from "../CharacterDetails.js/characterDetails"

/**
 * 
 * @param {*} state - Current state for REDUX store
 * @returns Maps the REDUX store to the state, and then sets that State to the current components Props.
 */

const mapStateToProps = state => {
    return{
        characterClasses: state.characterClasses,
        characterLevel: state.characterLevel,
        characterStats: state.characterStats,
        characterAncestries: state.characterAncestries,
    }
}

const mapDispatchToProps = (dispatch) => ({
    //connecting Redux class actions to props
    fetchClasses: () => {dispatch(fetchClasses())},
    selectClass: (selectedClass) => {dispatch(selectClass(selectedClass))},

    //connecting Redux level actions to props - raises and lowers levels or gets level
    getLevel: () => {dispatch(getLevel())},
    adjustLevel: (adjustment) => {dispatch(adjustLevel(adjustment))},

    //connecting Redux stat actions to props - raises and lowers stats or gets a specific stat
    getStat: (stat) => {dispatch(getStat(stat))},
    adjustStat: (stat,adjustment) => {dispatch(adjustStat(stat,adjustment))},

     //connecting Redux ancestry actions to props
     fetchAncestries: () => {dispatch(fetchAncestries())},
     selectAncestry: (selectedAncestry) => {dispatch(selectAncestry(selectedAncestry))},

})


class Main extends Component{
    constructor(props){
        super(props);
    }
    /**
     * On component load we fetch the available classes from the PFSRD API - 
     * required on load since the character class is
     * the first step and required for any other components.
     */
    componentDidMount = () =>{
        this.props.fetchClasses();
        this.props.fetchAncestries();
    }
    
    render(){
     
    return(
        
        <>
        <div className="main-body">
            <div className="generic-info">
                <h1 className="title-text">Character Identity</h1>
                <div className="character-NameClass">
                    {console.log(this.props.characterAncestries)}
                    <CharacterName/>
                    <CharacterClass characterClasses={this.props.characterClasses.classes.results} chooseClass={this.props.selectClass}/>
                    <CharacterAncestry ancestries={this.props.characterAncestries.ancestries.results} selectAncestry={this.props.selectAncestry}/>
                    <CharacterLevel charLevel={this.props.characterLevel.characterLevel} adjustLevel={this.props.adjustLevel}/>
                </div>
                <h1 className="title-text">Character Ability Scores</h1>
                <div className="character-stats-area">
                    {Object.keys(this.props.characterStats).map( (stat) => {
                    
                    return(
                        <CharacterStat className='character-stats-box' key={stat} stat={stat} statValue={(this.props.characterStats[stat]).value} adjustStat={this.props.adjustStat} statBonus={(this.props.characterStats[stat]).bonus}/>
                    ) })}
                    </div>
                    </div>
            {this.props.characterClasses.selectedClass && this.props.characterAncestries.selectedAncestry &&
                <div className="title-details-box">        
                    <h1 className="title-text">Character Details</h1>   
                    <h1 className="title-text">Saving Throws</h1>    
                </div>
            }
            <div className="character-details-section">                
                {/** Conditional Rendering here as HP is Unknown if no class is picked */}     
                {(this.props.characterClasses.selectedClass && this.props.characterAncestries.selectedAncestry) &&
                    <CharacterDetails hp={((this.props.characterClasses.selectedClass.system.hp + this.props.characterStats.constitution.bonus)
                                        * this.props.characterLevel.characterLevel) + this.props.characterAncestries.selectedAncestry.system.hp}
                                      ancestry={this.props.characterAncestries.selectedAncestry}  />
                }
          
        {/** Conditional Rendering here as Saving throws are not needed if no class is picked */}    
        {this.props.characterClasses.selectedClass && this.props.characterAncestries.selectedAncestry &&
        <>
            <div className="character-savingThrows">
                    <div className='character-savingThrow-ind'>
                        <h2> <i className="fa-solid fa-gauge-high"></i> Reflex</h2>
                        <p>{this.props.characterClasses.selectedClass.system.savingThrows.reflex + this.props.characterLevel.characterLevel + this.props.characterStats.dexterity.bonus}</p>
                    </div>
                    <div className='character-savingThrow-ind'>
                        <h2> <i className="fa-solid fa-hand-fist"></i> Fortitude</h2>
                        <p>{this.props.characterClasses.selectedClass.system.savingThrows.fortitude + this.props.characterLevel.characterLevel + this.props.characterStats.constitution.bonus}</p>
                    </div>
                    <div className='character-savingThrow-ind'>
                        <h2> <i className="fa-solid fa-brain"></i> Will</h2>
                        <p>{this.props.characterClasses.selectedClass.system.savingThrows.will + this.props.characterLevel.characterLevel + this.props.characterStats.wisdom.bonus}</p>
                    </div>
            </div>
            </>}
        </div>
        </div>

        </>
    )}
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);