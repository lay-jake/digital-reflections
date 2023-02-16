import './CharacterClass.css'
export default function CharacterClass({characterClasses,chooseClass}){
    return(
        <div>
        <h2>Character Class</h2>
        <h1 className="class-select-area"><i className="fa-solid fa-wand-sparkles"></i>
            {/** We create a drop down with options from the API for character Classes
             * When a user selects a class we send a 'chooseClass' dispatch to the Store by filtering the Class OBJ Array to match the value of the selected class.
             * We use [0] since it should be the first result returned from the filter.
             */}
            <select className="character-select-box" defaultValue='' onChange={ e => chooseClass(characterClasses.filter( (charClass) => {return charClass.name === e.target.value})[0])}>
            {/**
             * We map through each of the classes returned by the API that are stored in our characterClasses which has been passed down as a prop.
             * Each class is entered as a option using it's name key.
             */}    
            {characterClasses && characterClasses.map( (charClass) => {return <option value={charClass.name}>{charClass.name}</option>}
            )}
            </select>
        </h1>
        </div>
    )
}