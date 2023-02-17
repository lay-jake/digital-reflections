import DetailsModal from '../DetailsModal/DetailsModal'
import React from 'react'
import './CharacterAncestry.css'

export default function CharacterAncestry({ancestries,selectAncestry,selectedAncestry}){

    const[defaultShown,setDefaultShown] = React.useState(selectedAncestry ? {text:selectedAncestry.name}:{text:'Select Ancestry'})

    function returnSet(obj){
        setDefaultShown({...defaultShown,text:obj.name})
        selectAncestry(obj);
    }
 
    return(
        <div className='ancestry-select'>
        <h2>Character Ancestry</h2>
        <DetailsModal object={ancestries} returnSet={returnSet}/>
        <h1 className="ancestry-select-area"><i className="fa-solid fa-person-burst"></i>
            {/** We create a drop down with options from the API for character ancestries
             * When a user selects a ancestry we send a 'selectAncestry' dispatch to the Store by filtering the ancestry OBJ Array to match the value of the selected ancestry.
             * We use [0] since it should be the first result returned from the filter.
             */}

            <select className="ancestry-select-box" title= 'Hover over an Ancestry for brief description.' value={defaultShown.text} onChange={ e => returnSet(ancestries.filter( (ancestry) => {return ancestry.name === e.target.value})[0])}>
            <option value="Select Ancestry" disabled>Select Ancestry</option>
            {/**

            onClick={ () => selectAncestry(charAncestry)} 
             * We map through each of the ancestries returned by the API that are stored in our ancestries which has been passed down as a prop.
             * Each ancestry is entered as a option using it's name key.
             */}    
            {ancestries && ancestries.map( (charAncestry) =>{
                return (
                <option  key={charAncestry.name} className= 'tooltip' value={charAncestry.name}>  {charAncestry.name} </option>
             )})}
            </select>
        </h1>
        </div>
    )
}