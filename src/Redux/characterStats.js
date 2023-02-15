import * as ActionTypes from './actionTypes'

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
        case ActionTypes.ADJUST_STAT:
            switch((action.payload.stat).toLowerCase()){
                case "strength":
                    if(action.payload.adjustment === '-'){
                        return {...state, strength:{value: state.strength.value - 1, bonus: statBonus(state.strength.value-1)}}
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