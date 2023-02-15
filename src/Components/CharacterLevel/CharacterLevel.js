import React from "react";
import './CharacterLevel.css'
export default function CharacterLevel({charLevel,adjustLevel}){

    /**
     * 
     * @param {*} value - '+' or '-' indicates whether we will raise or lower the level of the character
     * @returns  - no return since the function is sent to modify the REDUX store.
     */
    const handleChange = (value) =>{
        switch(value){
            case '-':
                //We do not let the User lower the level of the Character to below 1
                if(charLevel > 1){
                    adjustLevel(value);
                }
                break;
            case '+':
                //We do not let the User raise the level of the Character to above 20
                if(charLevel < 20){
                    adjustLevel(value);
                }
                break;
            default:
                return null;
        }
    }
    return(
        <div className="character-level-area">
        <h1>Character Level</h1>
        <div className="level-adjust-area">
        <button className="level-adjust-button" onClick={() => handleChange('-')}>-</button>
        <h2>{charLevel}</h2>
        <button className="level-adjust-button" onClick={() => handleChange('+')}>+</button>
        </div>
        </div>
    )
}