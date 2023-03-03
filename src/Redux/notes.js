import * as ActionTypes from './actionTypes'

export const Notes = (state ={
    Notes:[]
}, action) =>{
    switch(action.type){
          /**
         * Action Type - ADD NOTE 
         * PAYLOAD - {NOTE} - NOTE object saved from NOTES page
         * RETURNS - Assigns OBJ to Store
         */
        case ActionTypes.ADD_NOTE:
            return {...state,Notes: state.Notes.concat(action.payload)};
        case ActionTypes.DELETE_NOTE:
            return {...state,Notes: state.Notes.filter( (note) => {return note !== action.payload})};
        default:
            return state;
        }
    }