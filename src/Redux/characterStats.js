import * as ActionTypes from './actionTypes'



export const CharacterStats = (state = {
    strength:8,
    dexterity:8,
    constitution:8,
    wisdom:8,
    intelligence:8,
    charisma:8,
}, action) => {
    switch(action.type){
        case ActionTypes.ADJUST_STAT:
            switch((action.payload.stat).toLowerCase()){
                case "strength":
                    if(action.payload.adjustment === '-'){
                        return {...state, strength: state.strength -1};
                    }else{
                        return {...state, strength: state.strength +1};
                        }               
                case "dexterity":
                    if(action.payload.adjustment === '-'){
                        return {...state, dexterity: state.dexterity -1};
                        }else{
                        return {...state, dexterity: state.dexterity +1};
                        }         
                case "constitution":
                    if(action.payload.adjustment === '-'){
                        return {...state, constitution: state.constitution -1};
                    }else{
                        return {...state, constitution: state.constitution +1};
                        }         
                case "wisdom":
                    console.log('made it to wisdom')
                    if(action.payload.adjustment === '-'){
                        return {...state, wisdom: state.wisdom -1};
                    }else{
                        return {...state, wisdom: state.wisdom +1};
                        }         
                case "intelligence":
                    if(action.payload.adjustment === '-'){
                        return {...state, intelligence: state.intelligence -1};
                    }else{
                        return {...state, intelligence: state.intelligence +1};
                        }         
                case "charisma":
                    if(action.payload.adjustment === '-'){
                        return {...state, charisma: state.charisma -1};
                    }else{
                        return {...state, charisma: state.charisma +1};
                        }
                default: return state                 
            }
        case ActionTypes.GET_STAT:
            case "Strength":
                return state.strength   
            case "Dexterity":
                return state.dexterity 
            case "Constitution":
                return state.constitution 
            case "Wisdom":
                return state.wisdom 
            case "Intelligence":
                return state.intelligence 
            case "Charisma":
                return state.charisma 
            default: return state           
    }
}