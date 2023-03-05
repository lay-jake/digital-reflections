import * as ActionTypes from './actionTypes'



export const CharacterAncestries = (state = {
    ancestries:[],
    isLoading:false,
    selectedAncestry:null,
    ancestryFeatures:[],
}, action) => {
    switch(action.type){
        /**
         * Action Type - LOADING Ancestry
         * * 
         * RETURNS - New STATE indicating loading is occuring
         * */

        case ActionTypes.LOADING_ANCESTRIES:
            return {...state, isLoading:true};

        /**
         * Action Type - ADDING Ancestry Feature to List
         * * 
         * RETURNS - New STATE indicating loading is complete, adding new feature to state
         * */

        case ActionTypes.ADD_ANCESTRY_FEATURE:
            return {...state, isLoading:false, ancestryFeatures: state.ancestryFeatures.concat(action.payload)};

          /**
         * Action Type - DELETE ALL Ancestry Features to listings
         * * 
         * RETURNS - New STATE indicating loading is complete, cleared all features in state
         * */

        case ActionTypes.DELETE_ANCESTRY_FEATURES:
            return {...state, isLoading:false, ancestryFeatures: []};    

         /**
         * Action Type - ADD ANCESTRIES
         * PAYLOAD - [ANCESTRIES] - ARRAY OF ANCESTRY OBJECTS
         * RETURNS - Modifies REDUX Store to add the array to the store and change loading status
         * */

        case ActionTypes.ADD_ANCESTRIES:
            return {...state, isLoading:false, ancestries: action.payload}
        /**
         * Action Type - SELECT ANCESTRY
         * PAYLOAD - [ANCESTRY] - ANCESTRY OBJECT
         * RETURNS - Modifies REDUX Store to add the SELECTED ANCESTRY to the store  as selectedANcestry and change loading status if needed
         */

        case ActionTypes.SELECT_ANCESTRY:
                return {...state, isLoading:false, selectedAncestry: action.payload}
        default:
            return state  
    }
}