import * as ActionTypes from './actionTypes'



export const CharacterClasses = (state = {
    classes:[],
    isLoading:false,
    selectedClass:null,
}, action) => {
    switch(action.type){
        /**
         * Action Type - LOADING CLASSES
         * * 
         * RETURNS - New STATE indicating loading is occuring
         * */

        case ActionTypes.LOADING_CLASSES:
            return {...state, isLoading:true};

         /**
         * Action Type - ADD CLASSES
         * PAYLOAD - [CLASSES] - ARRAY OF CLASS OBJECTS
         * RETURNS - Modifies REDUX Store to add the array to the store and change loading status
         * */

        case ActionTypes.ADD_CLASSES:
            return {...state, isLoading:false, classes: action.payload}
        /**
         * Action Type - SELECT CLASSES
         * PAYLOAD - [CLASS] - CLASS OBJECTS
         * RETURNS - Modifies REDUX Store to add the SELECTED CLASS to the store  as selectedClass and change loading status if needed
         */

        case ActionTypes.SELECT_CLASS:
                return {...state, isLoading:false, selectedClass: action.payload}
        default:
            return state  
    }
}