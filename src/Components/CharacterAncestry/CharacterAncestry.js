import './CharacterAncestry.css'

export default function CharacterAncestry({ancestries,selectAncestry,selectedAncestry}){
    
    return(
        <div>
        <h2>Character Ancestry</h2>
        <h1 className="ancestry-select-area"><i className="fa-solid fa-person-burst"></i>
            {/** We create a drop down with options from the API for character ancestries
             * When a user selects a ancestry we send a 'selectAncestry' dispatch to the Store by filtering the ancestry OBJ Array to match the value of the selected ancestry.
             * We use [0] since it should be the first result returned from the filter.
             */}
  
            <select  className="ancestry-select-box" title= 'Hover over an Ancestry for brief description.' defaultValue={selectedAncestry ? selectedAncestry: 'Select Ancestry'} onChange={ e => selectAncestry(ancestries.filter( (charAncestry) => {return charAncestry.name === e.target.value})[0])}>
            <option value="Select Ancestry" disabled>Select Ancestry</option>
            {/**
             * We map through each of the ancestries returned by the API that are stored in our ancestries which has been passed down as a prop.
             * Each ancestry is entered as a option using it's name key.
             */}    
            {ancestries && ancestries.map( (charAncestry) =>{

                  /**
                 * We split the description by the phrase 'You Might...' since it goes into WAY to much detail for a short snippet - its like 600 characters easy.
                 *  */                  

                const description = charAncestry.system.description.value.replace( /(<([^>]+)>)/ig, '').split('You Might...')[0]
            
                return (
                <option  className= 'tooltip' title={description} value={charAncestry.name}>{charAncestry.name} </option>
             )})}
            </select>
     
        </h1>
        </div>
    )
}