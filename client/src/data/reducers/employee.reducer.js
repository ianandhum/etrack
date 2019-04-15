import {fromJS} from 'immutable'

import initState from  '../store.init'
import {
    INIT_EMPLOYEES,
    BEGIN_FETCH_EMPLOYEES,
    FETCH_EMPLOYEES,
} from '../actions/employees'


export default function(state = initState,action ){
    const iState= fromJS(state)
    switch(action.type){

        case INIT_EMPLOYEES:
            return iState.setIn(['waiting'],false).setIn(['loaded'],false).toJS()

        case BEGIN_FETCH_EMPLOYEES:
            return iState.setIn(['waiting'],true).setIn(['loaded'],false).toJS()
        
        case FETCH_EMPLOYEES:
            return iState.setIn(['employees'],action.employees)
                            .setIn(['waiting'],false)
                                .setIn(['loaded'],true)
                                    .toJS()
                
        default:
            return state
    }
}