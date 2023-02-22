import React,{useState} from "react";
import Popup from 'reactjs-popup';

export default function FeatsFilter({featList,selectedClass,selectedAncestry,characterLevel}){



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

const search = () => {
    //filteredList will parse the Feats array and try to match any name/type or feat/action and add it to the new array to be returned.
    const filteredFeats = featList.filter(
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
            filteredFeats.filter( 
            feat => {
                return(
                {/** TO DO MORE FILTERING */}
                (feat.system.level.value <= characterLevel) &&
                (feat.sysyem.pr)  

                )
            })
            return filteredFeats
        }
     return filteredFeats
    }

//Displays either the search results, or the generic feat list showing all.    
const displayResults = () => {
     return (searchField !== '' ? search() : featList)
}

return(
    <>
    <div>
    <div>
       <label>
            <input type='checkbox' title="Only show feats you have met the prerequisites for." checked={meetPrerequisites} value={meetPrerequisites} onChange={ () => handleCheckbox()}/>
            Meet Prerequisites
       </label>
       {/** popup is used to warn user they do not have required info filled in. */}
       {<Popup open={isTriggered}
                onClose={()=>setIsTriggered(false)}>
                <div>Cannot filter by Prerequisites until class and ancestry are selected.</div>
                <button onClick={()=>setIsTriggered(false)}>Understood</button>
        </Popup>}
    </div>
    <input className="character-diety-searchbar" 
                   placeholder='Search by Name,Descriptions or Types'
                   //value is checked to see if we are typing 
                   value={searchField} 
                   onChange = {handleChange}/>
    </div>
    {/** Display and map results and return them as items to the DOM */}
    {displayResults().map( feat => { return <p key={feat.name}>{feat.name}</p>})}
    </>
)


}