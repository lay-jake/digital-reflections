import { Component } from "react"
import { fetchClasses,selectClass } from "../../Redux/actionCreator"
import {connect} from 'react-redux'
import CharacterClass from "../CharacterClass/CharacterClass"


const mapStateToProps = state => {
    return{
        characterClasses: state.characterClasses
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchClasses: () => {dispatch(fetchClasses())},
    selectClass: (selectedClass) => {dispatch(selectClass(selectedClass))}
    
})

class Main extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount = () =>{
        this.props.fetchClasses();
    }
    render(){
    return(
        <>
        <CharacterClass characterClasses={this.props.characterClasses.classes.results} chooseClass={this.props.selectClass}/>
        <h1>Your chosen class is: {this.props.characterClasses.selectedClass ? this.props.characterClasses.selectedClass : 'None' }</h1>
        </>
    )}
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);