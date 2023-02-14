
export default function CharacterClass({characterClasses,chooseClass}){
    return(
        <>
        <h2>Character Class</h2>
        <h1><i class="fa-solid fa-wand-sparkles"></i>
            <select defaultValue='' onChange={ e => chooseClass(characterClasses.filter( (charClass) => {return charClass.name === e.target.value})[0])}>
            {characterClasses && characterClasses.map( (charClass) => {return <option value={charClass.name}>{charClass.name}</option>}
            )}
            </select>
        </h1>
        </>
    )
}