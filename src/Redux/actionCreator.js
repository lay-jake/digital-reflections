import * as ActionTypes from './actionTypes'
import instance from '../Shared/api'

/**
 * 
 *  Actions for Class loads
 * 
 *  */
export const classesLoading = () =>({
    type: ActionTypes.LOADING_CLASSES
   }
)

export const addClasses = (classes) =>({
        type: ActionTypes.ADD_CLASSES,
        payload:classes
       }
    )
export const selectClass = (selectedClass) =>({
        type: ActionTypes.SELECT_CLASS,
        payload:selectedClass
       }
    )

export const fetchClasses = (dispatch) =>{
    return dispatch => {
        dispatch(classesLoading());
    
    instance.get('class')
    .then( res => {dispatch(addClasses(res.data))})
    //TO DO - More indepth error handling.
    .catch( error => console.log(error.message))
}}


/**
 * 
 *  Actions for Class loads
 * 
 *  */
export const dietiesLoading = () =>({
    type: ActionTypes.LOADING_DIETIES
   }
)

export const addDieties = (dieties) =>({
        type: ActionTypes.ADD_DIETIES,
        payload:dieties
       }
    )
export const selectDiety = (selectedDiety) =>({
        type: ActionTypes.SELECT_DIETY,
        payload:selectedDiety
       }
    )

export const fetchDieties = (dispatch) =>{
    return dispatch => {
        dispatch(dietiesLoading());
    
    instance.get('deity')
    .then( res => {dispatch(addDieties(res.data))})
    //TO DO - More indepth error handling.
    .catch( error => console.log(error.message))
}}


/**
 * 
 *  Actions for Diety loads
 * 
 *  */
export const ancestriesLoading = () =>({
    type: ActionTypes.LOADING_ANCESTRIES
   }
)

export const addAncestries = (ancestries) =>({
        type: ActionTypes.ADD_ANCESTRIES,
        payload:ancestries
       }
    )
export const selectAncestry = (selectedAncestry) =>({
        type: ActionTypes.SELECT_ANCESTRY,
        payload:selectedAncestry
       }
    )

export const fetchAncestries = (dispatch) =>{
    return dispatch => {
        dispatch(ancestriesLoading());
    
    instance.get('ancestry')
    .then( res => {dispatch(addAncestries(res.data))})
    //TO DO - More indepth error handling.
    .catch( error => console.log(error.message))
}}


/**
 * 
 *  Actions for Diety loads
 * 
 *  */
export const featsLoading = () =>({
    type: ActionTypes.LOADING_FEATS
   }
)

export const addFeats = (feats) =>({
        type: ActionTypes.ADD_FEATS,
        payload:feats
       }
    )

export const selectFeat = (feat) =>({
    type: ActionTypes.SELECT_FEAT,
    payload:feat
    }
)    


export const fetchFeats = (dispatch) =>{
    return dispatch => {
        dispatch(featsLoading());
    
    instance.get('feat')
    .then( res => {dispatch(addFeats(res.data))})
    //TO DO - More indepth error handling.
    .catch( error => console.log(error.message))
}}


/** 
 * 
 * Actions for Character Level handling 
 * 
 * */

export const adjustLevel = (adjustment) =>({
    type: ActionTypes.ADJUST_LEVEL,
    payload: adjustment
   }
)
export const getLevel = () =>({
    type: ActionTypes.GET_LEVEL
   }
)

/** Actions for Character STATs handling */

export const adjustStat = (stat,adjustment) =>(
    {
    type: ActionTypes.ADJUST_STAT,
    payload: {stat,adjustment}
   }
)
export const getStat = (stat) =>({
    type: ActionTypes.GET_STAT,
    payload:stat
   }
)