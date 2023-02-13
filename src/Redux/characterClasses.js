import * as ActionTypes from './actionTypes'



export const CharacterClasses = (state = {
    classes:[],
    isLoading:false,
    selectedClass:null,
}, action) => {
    switch(action.type){
        case ActionTypes.LOADING_CLASSES:
            return {...state, isLoading:true};
        case ActionTypes.ADD_CLASSES:
            return {...state, isLoading:false, classes: action.payload}
        case ActionTypes.SELECT_CLASS:
                return {...state, isLoading:false, selectedClass: action.payload}
        default:
            return state  
    }
}