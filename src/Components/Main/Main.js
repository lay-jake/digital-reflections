import { Component } from "react"
import { adjustLevel, fetchClasses,getLevel,selectClass,getStat, adjustStat,fetchAncestries,selectAncestry, fetchDieties, selectDiety } from "../../Redux/actionCreator"
import {connect} from 'react-redux'
import './main.css'
import { Link, Navigate, Route,Routes,Switch } from "react-router-dom"
import CharacterOverview from "../CharacterOverview/CharacterOverview"
import Feats from "../Feats/Feats"
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
        characterDieties: state.characterDieties,
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

    //connecting Redux dieties actions to props
    fetchDieties: () => {dispatch(fetchDieties())},
    selectDiety: (selectedDiety) => {dispatch(selectDiety(selectedDiety))},

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
        this.props.fetchDieties();
    }
    
    render(){
     
    return(
        <div>
        <header> Fancy header going to go here eventually but for now click to go to feats{<Link to='/feats'> F E A T S</Link>} or click to go back {<Link to='/overview'>  O V E R V I E W</Link>}  so we can test data storage</header>
        <Routes>
            {/** Routing option here forces users to the overview Route on load. */}
          <Route exact path='' element={<Navigate to='/overview'/>}/>
           {/** Routing option here will wait to render until class results from fetch are obtained, since it will be undefined otherwise.
            * Might set up a loading screen to send instead of an empty frag.
           */}  
          <Route exact path= '/overview' element={
            this.props.characterClasses.classes.results ? 
            <CharacterOverview  characterClasses = {this.props.characterClasses} selectClass={this.props.selectClass}
                                characterAncestries = {this.props.characterAncestries} selectAncestry={this.props.selectAncestry}
                                characterDieties={this.props.characterDieties} selectDiety={this.props.selectDiety}
                                characterLevel={this.props.characterLevel.characterLevel} adjustLevel={this.props.adjustLevel}
                                characterStats={this.props.characterStats} adjustStat={this.props.adjustStat}/> : <></>}/>

            <Route exact path='/feats' element={<Feats/>} />                    
        </Routes> 
        </div>
    )}
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);