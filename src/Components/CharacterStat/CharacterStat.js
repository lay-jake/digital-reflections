import React from "react";
import './CharacterStat.css'



export default function CharacterStat({stat,statValue,adjustStat,statBonus}){

    const handleChange = (value) =>{
        if(statValue > 1 || value !== '-'){
            adjustStat(stat,value);
        }
    }

    return(
        <>
        <div className="character-stat-indvidual">
            <div className="character-stat-bonus">
                <p>BONUS : ( {statValue> 11 ? '+' : ''}{statBonus} )</p>    
            </div>
            <div className="character-stat-adjust">
                <button className="stat-adjust-button" onClick={() => handleChange('-')}>-</button>
                <h1>{stat.toUpperCase()}</h1>
                <button className="stat-adjust-button" onClick={() => handleChange('+')}>+</button>
            </div>
            <div>
                <p className="character-stat-value">Score : {statValue}</p>
            </div>
        </div>
        </>
    )
}