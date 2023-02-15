import * as ActionTypes from './actionTypes'



export const CharacterLevel = (state = {
    characterLevel: 1
}, action) => {
    switch(action.type){

        /**
         * Action Type - ADJUST LEVEL
         * PAYLOAD - [ADJUSTMENT] - ADJUSTMENT: Increased or Decreased
         * 
         * RETURNS - Modifies REDUX stat to new Level 
         * */

        case ActionTypes.ADJUST_LEVEL:

            if(action.payload === '-'){
            return {...state, characterLevel: state.characterLevel -1};
            }else{
            return {...state, characterLevel: state.characterLevel +1};
            }

        /**
         * Action Type - GET LEVEL
         * 
         * RETURNS - CURRENT CHARACTER LEVEL STORED IN REDUX STORE
         * */    

        case ActionTypes.GET_LEVEL:
              return state.characterLevel

        default:
            return state;
    }
}