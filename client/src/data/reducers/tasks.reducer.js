import initState from  '../store.init'
import {
    INIT_ACTIVE_TASKS,
    VIEW_SET_ACTIVE_TASK,
    VIEW_BEGIN_FETCH_TASK,
    VIEW_WAIT_AND_SELECT_TASK
} from '../actions/active_tasks'
import {fromJS} from 'immutable'

export default function(state = initState,action ){
    const iState= fromJS(state)
    switch(action.type){

        case INIT_ACTIVE_TASKS:
            return Object.assign({},state,{
                active:action.active
            });
        case VIEW_SET_ACTIVE_TASK:
            return iState.setIn(['view','active','activeIndex'],action.index).toJS()

        case VIEW_BEGIN_FETCH_TASK:
            return iState.setIn(['view','waiting'],true).toJS()
        
        case VIEW_WAIT_AND_SELECT_TASK:
                    return iState.setIn(['view','selected'],action.task)
                                    .setIn(['view','waiting'],false)
                                        .toJS()
        default:
            return state
    }
}