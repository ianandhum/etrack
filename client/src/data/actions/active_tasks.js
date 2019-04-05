//import API from '../api/authenticatedAPICall'
import {_Tasks,_Task} from '../mock/tasks'


//ACTIONS
export const INIT_ACTIVE_TASKS = 'INIT_ACTIVE_TASKS'
export const VIEW_SET_ACTIVE_TASK = 'VIEW_SET_ACTIVE_TASK'
export const VIEW_BEGIN_FETCH_TASK = 'VIEW_BEGIN_FETCH_TASK'
export const VIEW_WAIT_AND_SELECT_TASK = 'VIEW_WAIT_AND_SELECT_TASK'


//ACTION CREATORS
export var initTasks=function(){
    return (dispatch)=>{
        setTimeout(function(){
            dispatch({
                type:INIT_ACTIVE_TASKS,
                active:_Tasks(6)//debugging only 
            })
        },1000)
        return;
    }
}

export var vSetActiveTask=function(index){
    return {
        type:VIEW_SET_ACTIVE_TASK,
        index:index
    }
}
export var notifyFetchTask = function(){
    return {
        type:VIEW_BEGIN_FETCH_TASK
    }
}
export var setSelectedTask = function(task){
    return {
        type:VIEW_WAIT_AND_SELECT_TASK,
        task
    }
}
export var fetchTask=function(taskId){
    return (dispatch)=>{
        dispatch(notifyFetchTask())
        setTimeout(function(){
            dispatch(setSelectedTask(_Task()))
        },2000)
        return;
    }
}



