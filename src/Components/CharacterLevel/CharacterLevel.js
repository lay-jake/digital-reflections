import React from "react";

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
        <>
        <button onClick={() => handleChange('-')}>-</button>
        <h1>{charLevel}</h1>
        <button onClick={() => handleChange('+')}>+</button>
        </>
    )
}