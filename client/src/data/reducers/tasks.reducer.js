import {fromJS} from 'immutable'

import initState from  '../store.init'
import {
    INIT_ACTIVE_TASKS,
    VIEW_SET_ACTIVE_TASK,
    VIEW_BEGIN_FETCH_TASK,
    VIEW_WAIT_AND_SELECT_TASK
} from '../actions/active_tasks'

import {
    INIT_ALL_TASKS,
    BEGIN_FETCH_ALL_TASKS,
    WAIT_AND_SET_TASKS
} from '../actions/tasks'


export default function(state = initState.tasks,action ){
    const iState= fromJS(state)
    switch(action.type){

        case INIT_ACTIVE_TASKS:
            return iState.setIn(['active'],action.active)
                            .setIn(['loaded'],true)
                                .setIn(['view','active','activeIndex'],0)
                                    .toJS()
        case VIEW_SET_ACTIVE_TASK:
            return iState.setIn(['view','active','activeIndex'],action.index).toJS()

        case VIEW_BEGIN_FETCH_TASK:
            return iState.setIn(['view','waiting'],true)
                                .toJS()
        
        case VIEW_WAIT_AND_SELECT_TASK:
                    return iState.setIn(['view','selected'],action.task)
                                    .setIn(['view','waiting'],false)
                                            .toJS()
        case INIT_ALL_TASKS:
            return Object.assign({},state,{
                loaded:false
            });
        case BEGIN_FETCH_ALL_TASKS:
            return iState.setIn(['view','waiting'],true)
                            .setIn(['view','loaded'],false)
                                .toJS()
            
        case WAIT_AND_SET_TASKS:
                return iState.setIn(['all'],action.tasks)
                                .setIn(['view','waiting'],false)
                                    .setIn(['view','loaded'],true)
                                        .toJS()
        default:
            return state
    }
}