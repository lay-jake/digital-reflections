import * as ActionTypes from './actionTypes'



export const CharacterLevel = (state = {
    characterLevel: 1
}, action) => {
    switch(action.type){
        case ActionTypes.ADJUST_LEVEL:

            if(action.payload === '-'){
            return {...state, characterLevel: state.characterLevel -1};
            }else{
            return {...state, characterLevel: state.characterLevel +1};
            }

        case ActionTypes.GET_LEVEL:
              return state.characterLevel
        default:
            return state;
    }
}