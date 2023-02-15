import React from "react";
import './CharacterLevel.css'
export default function CharacterLevel({charLevel,adjustLevel}){
    const handleChange = (value) =>{
        switch(value){
            case '-':
                if(charLevel > 1){
                    adjustLevel(value);
                }
                break;
            case '+':
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