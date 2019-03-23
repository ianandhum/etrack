
import {_Tasks} from '../mock/tasks'
export const INIT_ACTIVE_TASKS = 'INIT_ACTIVE_TASKS'
export const VIEW_SET_ACTIVE_TASK = 'VIEW_SET_ACTIVE_TASK'

export var initTasks=function(){
    return {
        type:INIT_ACTIVE_TASKS,
        active:_Tasks(6)//debugging only
        
    }
}

export var vSetActiveTask=function(index){
    return {
        type:VIEW_SET_ACTIVE_TASK,
        index:index
    }
}
