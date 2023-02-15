import './CharacterClass.css'
export default function CharacterClass({characterClasses,chooseClass}){
    return(
        <div>
        <h2>Character Class</h2>
        <h1 className="class-select-area"><i class="fa-solid fa-wand-sparkles"></i>
            <select className="character-select-box" defaultValue='' onChange={ e => chooseClass(characterClasses.filter( (charClass) => {return charClass.name === e.target.value})[0])}>
            {characterClasses && characterClasses.map( (charClass) => {return <option value={charClass.name}>{charClass.name}</option>}
            )}
            </select>
        </h1>
        </div>
    )
}