import './CharacterName.css'

export default function CharacterName(){
    return(
        <>
        <div className='character-name-area'>
        <h2>Character Name</h2>
        {/** Currently this just allows the user to type in the Character name, no additional features yet. */}
        <input className='character-name-input'></input>
        </div>
        </>
    )
}