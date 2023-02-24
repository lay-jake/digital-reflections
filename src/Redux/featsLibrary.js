import { Action } from '@remix-run/router'
import * as ActionTypes from './actionTypes'

export const FeatsLibrary = (state ={
    feats:[],
    isLoading:false,
    selectedFeats:[]
}, action) =>{
    switch(action.type){
          /**
         * Action Type - ADD FEAT 
         * PAYLOAD - [Feats] - Array of Feat Objects from API
         * RETURNS - Assigns array to Store, changes loading to false.
         */
        case ActionTypes.ADD_FEATS:
            console.log(action.payload)
            return {...state, isLoading:false,feats:action.payload.results}
        case ActionTypes.LOADING_FEATS:
            return {...state, isLoading:true}
        case ActionTypes.SELECT_FEAT:
            return {...state,selectedFeats:[...state.selectedFeats, action.payload]}    
        default:
            return state        
    }
}