import { Component } from "react"
import { adjustLevel, fetchClasses,getLevel,selectClass,getStat, adjustStat } from "../../Redux/actionCreator"
import {connect} from 'react-redux'
import CharacterClass from "../CharacterClass/CharacterClass"
import CharacterName from "../CharacterName/CharacterName"
import CharacterLevel from "../CharacterLevel/CharacterLevel"
import CharacterStat from "../CharacterStat/CharacterStat"


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
        <div className="character-NameClass">
            <CharacterName/>
            <CharacterClass characterClasses={this.props.characterClasses.classes.results} chooseClass={this.props.selectClass}/>
        </div>

        <div>
            <CharacterLevel charLevel={this.props.characterLevel.characterLevel} adjustLevel={this.props.adjustLevel}/>

            {Object.keys(this.props.characterStats).map( (stat) => {
            
            return(
                <CharacterStat key={stat} stat={stat} statValue={this.props.characterStats[stat]} adjustStat={this.props.adjustStat}/>
            ) })}
            <h2>Hit Points</h2>
        </div>
        {this.props.characterClasses.selectedClass &&
        <div className="character-savingThrows">
        <h2>Saving Throws</h2>
        <h4>Reflex</h4>
        <h5>{this.props.characterClasses.selectedClass.system.savingThrows.reflex + this.props.characterLevel.characterLevel}</h5>
        <h4>Fortitude</h4>
        <h5>{this.props.characterClasses.selectedClass.system.savingThrows.fortitude + this.props.characterLevel.characterLevel}</h5>
        <h4>Will</h4>
        <h5>{this.props.characterClasses.selectedClass.system.savingThrows.will + this.props.characterLevel.characterLevel}</h5>
        </div>
        }
        </>
    )}
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);