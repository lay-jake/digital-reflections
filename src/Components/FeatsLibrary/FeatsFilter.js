import React,{useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Popup from 'reactjs-popup';
import './FeatsLibrary.css'

export default function FeatsFilter({featList,selectedClass,selectedAncestry,characterLevel,setSelected,characterStats}){



  /**
   * Use states to track a few things
   * 
   * Searchfield will be updated as user types into the input box it's used to then filter results
   * meetPrequisites is a toggle to add additional filters using character data to the search
   * isTriggered will track if user tried to tick additional filters without proper data enetered and activate a warning.
   * 
   */

const [searchField, setSearchField] = useState("");
const [meetPrerequisites, setMeetPrerequisites] = useState(false);
const [isTriggered,setIsTriggered] = useState(false); 
  
//Handles the checkbox that will add aditional filters - we can only use it if the character has a class and ancestry.
const handleCheckbox = () =>{

    if(selectedClass && selectedAncestry){
    setMeetPrerequisites(!meetPrerequisites)
    } else{
    setIsTriggered(true);
    }
}    

//handles the input field, updates as typed
const handleChange = e => {
    setSearchField(e.target.value);
}

const handleClick = (feat) =>{
    setSelected(feat)
}

const prereqStatSearch = (feat,stat) =>{
    let preReqList = feat.system.prerequisites.value.map ( (prereq) => {
        //checking for stat prereqs
        let returnValue = false;
         if (prereq.value.toLowerCase().includes(stat)){
            let splitReq = prereq.value.split(" ");
            returnValue = splitReq[(splitReq.length - 1)] >= characterStats[stat].value  
         }
          return returnValue
        })
        return preReqList.includes(true) ? true : false
    }

const search = () => {
    
    //filteredList will parse the Feats array and try to match any name/type or feat/action and add it to the new array to be returned.
    let  filteredFeats = featList.filter(
        feat => {
            return (
            feat.name.toLowerCase()
            .includes(searchField.toLowerCase()) ||
            feat.system.actionType.value
            .includes(searchField.toLowerCase()) ||
            feat.system.featType.value
            .includes(searchField.toLowerCase()) 
            )
            }
        );
        //additional search logic to be performed if asked.
        if(meetPrerequisites){
            filteredFeats = filteredFeats.filter( 
            feat => {
                let statReq = (Object.keys(characterStats).map(stat =>{return prereqStatSearch(feat,stat)}))
                console.log(statReq.includes(true))
                return(
                feat.system.level.value <= characterLevel &&
                statReq.includes(true)
              );
            }) 
            }
        return filteredFeats
        }

//Displays either the search results, or the generic feat list showing all.    
const displayResults = () => {
     return (searchField !== '' ? search() : featList)
}

return(
    <>
    <Container>
    <Row>
        <Col xs={{span:12,offset:2}}sm={{span:4,offset:5}}>
       <label className="extra-option-search">
            <input type='checkbox' title="Only show feats you have met the prerequisites for This is a WIP" checked={meetPrerequisites} value={meetPrerequisites} onChange={ () => handleCheckbox()}/>
            Meet Prerequisites (WIP)
       </label>
       {/** popup is used to warn user they do not have required info filled in. */}
       {<Popup open={isTriggered}
                onClose={()=>setIsTriggered(false)}>
                <div>Cannot filter by Prerequisites until class and ancestry are selected.</div>
                <button className="feats-warning-button" onClick={()=>setIsTriggered(false)}>Understood</button>
        </Popup>}
        </Col>
    </Row>
    <Row>
        <Col xs={{span:12,offset:1}}sm={{span:10,offset:2}}>
        <input className="character-feat-searchbar text-center" 
                   placeholder='Search by Name,Descriptions or Types'
                   //value is checked to see if we are typing 
                   value={searchField} 
                   onChange = {handleChange}/>
        </Col>
    </Row>
    </Container>

    {/** Display and map results and return them as items to the DOM */}
    <Row xs={1}sm={2}md={3}lg={4}>
         {displayResults().map( feat => { 
            return (
            <Col key={feat.name}>
                <p className="feats-ind text-center" onClick={ ()=> handleClick(feat)}><strong>{feat.name}</strong>  - ({feat.system.actionType.value.substring(0,1).toUpperCase() + feat.system.actionType.value.substring(1)})</p>
            </Col>
                )})}
    </Row>
    </>
)


}