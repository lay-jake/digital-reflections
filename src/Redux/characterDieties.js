import * as ActionTypes from './actionTypes'



export const CharacterDieties = (state = {
    dieties:[],
    isLoading:false,
    selectedDiety:null,
}, action) => {
    switch(action.type){
        /**
         * Action Type - LOADING Dieties
         * * 
         * RETURNS - New STATE indicating loading is occuring
         * */

        case ActionTypes.LOADING_DIETIES:
            return {...state, isLoading:true};

         /**
         * Action Type - ADD DIETIES
         * PAYLOAD - [DIETIES] - ARRAY OF DIETY OBJECTS
         * RETURNS - Modifies REDUX Store to add the array to the store and change loading status
         * */

        case ActionTypes.ADD_DIETIES:
            return {...state, isLoading:false, dieties: action.payload}
        /**
         * Action Type - SELECT DIETY
         * PAYLOAD - [DIETY] - DIETY OBJECT
         * RETURNS - Modifies REDUX Store to add the SELECTED DIETY to the store  as selectedDIETY and change loading status if needed
         */

        case ActionTypes.SELECT_DIETY:
                return {...state, isLoading:false, selectedDiety: action.payload}
        default:
            return state  
    }
}