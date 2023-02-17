import React,{useState} from "react";
import './CharacterDiety.css'



export default function CharacterDiety({characterDieties,selectDiety}){
    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false); 

    const dieties = characterDieties.dieties;

    const search = () => {
        const filteredDieties = dieties.results.filter(
          diety => {
            return (
              diety.name.toLowerCase()
              .includes(searchField.toLowerCase()) ||
              diety.system.domains.primary
              .includes(searchField.toLowerCase()) ||
              diety.system.domains.alternate
              .includes(searchField.toLowerCase())
            )
            }
         );
         return filteredDieties
        }

    const handleChange = e => {
        setSearchField(e.target.value);
        if(e.target.value===""){
            setSearchShow(false);
          }
          else {
            setSearchShow(true);
          }
        };  
    const handleClick = (value) =>{
        setSearchField(value.name);
        selectDiety(value);
        setSearchShow(false);
    }    
    
        return(
            <div className="character-diety-area">
            <h2> Character Diety </h2>
            <div className="character-diety-select-area">
            <i className="fa-solid fa-place-of-worship"></i>
            <input className="character-diety-searchbar" placeholder='Search Dieties or Domains' value={searchField} onChange = {handleChange}/>             
            {searchShow && <div className="character-diet-totalsearchResults" style={{overflowY: 'scroll', height:'50vh'}}>
                {search().map( (diety) =>{
                    const description = diety.system.description.value.replace( /(<([^>]+)>)/ig, '')
                    return(
                    <p className="character-diet-searchResults" title={description} key={diety.name} onClick={ () => handleClick(diety)}>{diety.name}</p>
                    )
                })}
                </div>}	
            </div>
            </div>
           
        )
    }
