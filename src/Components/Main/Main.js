import { Component } from "react"
import { adjustLevel, fetchClasses,getLevel,selectClass,getStat, adjustStat } from "../../Redux/actionCreator"
import {connect} from 'react-redux'
import CharacterClass from "../CharacterClass/CharacterClass"
import CharacterName from "../CharacterName/CharacterName"
import CharacterLevel from "../CharacterLevel/CharacterLevel"
import CharacterStat from "../CharacterStat/CharacterStat"
import './main.css'

const mapStateToProps = state => {
    return{
        characterClasses: state.characterClasses,
        characterLevel: state.characterLevel,
        characterStats: state.characterStats
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
    adjustStat: (stat,adjustment) => {dispatch(adjustStat(stat,adjustment))

}})


class Main extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount = () =>{
        this.props.fetchClasses();
    }

    render(){
    console.log(this.props.characterStats)   
    return(
        <>
        <div className="main-body">
            <div className="generic-info">
                <div className="character-NameClass">
                    <CharacterName/>
                    <CharacterClass characterClasses={this.props.characterClasses.classes.results} chooseClass={this.props.selectClass}/>
            
                    <CharacterLevel charLevel={this.props.characterLevel.characterLevel} adjustLevel={this.props.adjustLevel}/>
                </div>
                <div className="character-stats-area">
                    {Object.keys(this.props.characterStats).map( (stat) => {
                    
                    return(
                        <CharacterStat className='character-stats-box' key={stat} stat={stat} statValue={(this.props.characterStats[stat]).value} adjustStat={this.props.adjustStat} statBonus={(this.props.characterStats[stat]).bonus}/>
                    ) })}
                    </div>
                {this.props.characterClasses.selectedClass &&    
                <div className="character-defensive-area">       
                <h2>Hit Points</h2>
                <p>{(this.props.characterClasses.selectedClass.system.hp + this.props.characterStats.constitution.bonus)*this.props.characterLevel.characterLevel}</p>
                </div>
                }
            </div>
        {this.props.characterClasses.selectedClass &&
        <div className="character-savingThrows">
        <h2>Saving Throws</h2>
        <h4>Reflex</h4>
        <h5>{this.props.characterClasses.selectedClass.system.savingThrows.reflex + this.props.characterLevel.characterLevel + this.props.characterStats.dexterity.bonus}</h5>
        <h4>Fortitude</h4>
        <h5>{this.props.characterClasses.selectedClass.system.savingThrows.fortitude + this.props.characterLevel.characterLevel + this.props.characterStats.constitution.bonus}</h5>
        <h4>Will</h4>
        <h5>{this.props.characterClasses.selectedClass.system.savingThrows.will + this.props.characterLevel.characterLevel + this.props.characterStats.wisdom.bonus}</h5>
        </div>}
        </div>
        </>
    )}
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);