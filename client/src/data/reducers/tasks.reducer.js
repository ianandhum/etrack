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
    WAIT_AND_SET_TASKS,
    SAVE_NEW_TASK
} from '../actions/tasks'


export default function(state = initState.tasks,action ){
    const iState = fromJS(state)
    switch(action.type){
        //only for active tasks
        case INIT_ACTIVE_TASKS:
            return iState.setIn(['active'],action.active)
                            .setIn(['activeLoaded'],true)
                                .setIn(['view','active','activeIndex'],0)
                                .   setIn(['view','selected'],action.active[0])
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

        // For all tasks
        case INIT_ALL_TASKS:
            return Object.assign({},state,{
                loaded:false,
                waiting:false
            });
        case BEGIN_FETCH_ALL_TASKS:
            return iState.setIn(['view','waiting'],true)
                            .setIn(['loaded'],false)
                                .toJS()
            
        case WAIT_AND_SET_TASKS:
                return iState.setIn(['all'],action.tasks)
                                .setIn(['view','waiting'],false)
                                    .setIn(['loaded'],true)
                                        .toJS()
        case SAVE_NEW_TASK: 
                let newTaskObj = GenerateTask(action)
                return Object.assign({},state,{
                    active:[newTaskObj,...state.active],
                    activeLoaded:true,
                    all:[newTaskObj,...state.all],
                })
                
        default:
            return state
    }
}



//UTIL FUNCTIONS

const GenerateTask=({client,employee,due_date})=>{
    
    return {
        id:parseInt(Math.random()*10000),
        date:new Date().toISOString(),
        status: true,
        to:client.city+ " " +client.country + " " +client.state,
        checkpoints:[],
        deadLine:due_date,
        user:{
            ...employee,
            avatar:"https://placekitten.com/100/100"
        },
        checkpointsRaw:{
            to:client.to,
            checkpoints:[]
        }
    }
}