import { Component } from "react"
import { adjustLevel, fetchClasses,getLevel,selectClass } from "../../Redux/actionCreator"
import {connect} from 'react-redux'
import CharacterClass from "../CharacterClass/CharacterClass"
import CharacterName from "../CharacterName/CharacterName"
import CharacterLevel from "../CharacterLevel/CharacterLevel"


const mapStateToProps = state => {
    return{
        characterClasses: state.characterClasses,
        characterLevel: state.characterLevel,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchClasses: () => {dispatch(fetchClasses())},
    selectClass: (selectedClass) => {dispatch(selectClass(selectedClass))},
    getLevel: () => {dispatch(getLevel())},
    adjustLevel: (adjustment) => {dispatch(adjustLevel(adjustment))},
})

class Main extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount = () =>{
        this.props.fetchClasses();
    }
    render(){
    console.log(this.props.characterClasses.selectedClass)
    return(
        <>
        <div className="character-NameClass">
            <CharacterName/>
            <CharacterClass characterClasses={this.props.characterClasses.classes.results} chooseClass={this.props.selectClass}/>
        </div>

        <div>
            <CharacterLevel charLevel={this.props.characterLevel.characterLevel} adjustLevel={this.props.adjustLevel}/>
            <h2>Hit Points</h2>
        </div>

        <div className="character-savingThrows">

        <h2>Saving Throws</h2>
        <h4>Reflex</h4>
        <h5>{this.props.characterClasses.selectedClass.system.savingThrows.reflex + this.props.characterLevel.characterLevel}</h5>
        <h4>Fortitude</h4>
        <h5>{this.props.characterClasses.selectedClass.system.savingThrows.fortitude + this.props.characterLevel.characterLevel}</h5>
        <h4>Will</h4>
        <h5>{this.props.characterClasses.selectedClass.system.savingThrows.will + this.props.characterLevel.characterLevel}</h5>
        </div>
        </>
    )}
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);