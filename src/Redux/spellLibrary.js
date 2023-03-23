import * as ActionTypes from './actionTypes'

export const SpellsLibrary = (state ={
    spells:[],
    isLoading:false,
    selectedSpells:[]
}, action) =>{
    console.log("Inside of lib")
    switch(action.type){
          /**
         * Action Type - ADD FEAT 
         * PAYLOAD - [SPELLS] - Array of Feat Objects from API
         * RETURNS - Assigns array to Store, changes loading to false.
         */
        case ActionTypes.ADD_SPELLS:
            console.log( action.payload)
            return {...state, isLoading:false, spells:action.payload.results}
        case ActionTypes.LOADING_SPELLS:
            return {...state, isLoading:true}
        case ActionTypes.SELECT_SPELL:
            return {...state,selectedSpells:[...state.selectedSpells, action.payload]}    
        default:
            return state        
    }
}