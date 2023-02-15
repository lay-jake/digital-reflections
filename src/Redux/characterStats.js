import * as ActionTypes from './actionTypes'
/**
 * 
 * @param {*} statValue - Hard Stat Value number IE 20 Dexterity, 18 Wisdom etc..
 * @returns Positive or Negative Integer representing the bonus of that stat to be applied when applicable.
 */
const statBonus = (statValue) =>{
    return Math.floor((statValue - 10)/2)

}

export const CharacterStats = (state = {
    strength:{value:8,bonus:-1},
    dexterity:{value:8,bonus:-1},
    constitution:{value:8,bonus:-1},
    wisdom:{value:8,bonus:-1},
    intelligence:{value:8,bonus:-1},
    charisma:{value:8,bonus:-1}
}, action) => {
    switch(action.type){
        /**
         * Action Type - ADJUST STAT 
         * PAYLOAD - [STAT,ADJUSTMENT] - STAT: Which of the stats to be modified, ADJUSTMENT: Increased or Decreased
         * 
         * RETURNS - Modifies REDUX stat to new STAT Number and Recalcs BONUS and Updates as needed.
         */
        case ActionTypes.ADJUST_STAT:
            switch((action.payload.stat).toLowerCase()){
                
                /** Each case returns previous state as we are only altering one stat at a time, then updates appropiate case and uses statBonus to calculate new Stat Bonus */
                case "strength":
                    if(action.payload.adjustment === '-'){
                        return {...state, strength:{value: state.strength.value - 1, bonus: statBonus(state.strength.value - 1)}}
                    }else{
                        return {...state, strength:{value: state.strength.value + 1, bonus: statBonus(state.strength.value+1)}}
                        }               
                case "dexterity":
                    if(action.payload.adjustment === '-'){
                        return {...state, dexterity:{value: state.dexterity.value - 1, bonus: statBonus(state.dexterity.value-1)}}
                    }else{
                        return {...state, dexterity:{value: state.dexterity.value + 1, bonus: statBonus(state.dexterity.value+1)}}
                        }               
                case "constitution":
                    if(action.payload.adjustment === '-'){
                        return {...state, constitution:{value: state.constitution.value - 1, bonus: statBonus(state.constitution.value-1)}}
                    }else{
                        return {...state, constitution:{value: state.constitution.value + 1, bonus: statBonus(state.constitution.value+1)}}
                        }              
                case "wisdom":
                    if(action.payload.adjustment === '-'){
                        return {...state, wisdom:{value: state.wisdom.value - 1, bonus: statBonus(state.wisdom.value-1)}}
                    }else{
                        return {...state, wisdom:{value: state.wisdom.value + 1, bonus: statBonus(state.wisdom.value+1)}}
                        }               
                case "intelligence":
                    if(action.payload.adjustment === '-'){
                        return {...state, intelligence:{value: state.intelligence.value - 1, bonus: statBonus(state.intelligence.value-1)}}
                    }else{
                        return {...state, intelligence:{value: state.intelligence.value + 1, bonus: statBonus(state.intelligence.value+1)}}
                        }                 
                case "charisma":
                    if(action.payload.adjustment === '-'){
                        return {...state, charisma:{value: state.charisma.value - 1, bonus: statBonus(state.charisma.value-1)}}
                    }else{
                        return {...state, charisma:{value: state.charisma.value + 1, bonus: statBonus(state.charisma.value+1)}}
                        }          
                default: return state                 
            }

                    /**
         * Action Type - GET STAT 
         * PAYLOAD - [STAT] - STAT: Which of the stats to be returned
         * RETURNS - Value of the stat in redux store.
         */
        case ActionTypes.GET_STAT:
            case "Strength":
                return state.strength.value  
            case "Dexterity":
                return state.dexterity.value 
            case "Constitution":
                return state.constitution.value
            case "Wisdom":
                return state.wisdom.value
            case "Intelligence":
                return state.intelligence.value
            case "Charisma":
                return state.charisma.value
            default: return state           
    }
}