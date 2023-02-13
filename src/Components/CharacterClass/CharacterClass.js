
export default function CharacterClass({characterClasses,chooseClass}){
    return(
        <>
        <h1>Character Class</h1>
        <h1><i class="fa-solid fa-wand-sparkles"></i>
            <select onChange={ e => chooseClass(e.target.value)}>
            {characterClasses && characterClasses.map( (charClass) => {return <option value={charClass.name}>{charClass.name}</option>}
            )}
            </select>
        </h1>
        </>
    )
}