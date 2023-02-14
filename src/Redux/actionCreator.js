import * as ActionTypes from './actionTypes'
import instance from '../Shared/api'

/** Actions for Class loads */
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

/** Actions for Character Level handling */

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