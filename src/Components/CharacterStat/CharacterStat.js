import React from "react";

export default function CharacterStat({stat,statValue,adjustStat}){
    const handleChange = (value) =>{
        if(statValue > 1 || value !== '-'){
            adjustStat(stat,value);
        }
    }
    return(
        <>
        <div>
        <button onClick={() => handleChange('-')}>-</button>
        <h1>{stat}</h1>
        <h3>{statValue}</h3>
        <button onClick={() => handleChange('+')}>+</button>
        </div>
        </>
    )
}