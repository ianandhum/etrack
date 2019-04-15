//import API from '../api/authenticatedAPICall'
import {_Tasks} from '../mock/tasks'


//ACTIONS
export const INIT_ALL_TASKS = 'INIT_ALL_TASKS'
export const BEGIN_FETCH_ALL_TASKS = 'BEGIN_FETCH_ALL_TASKS'
export const WAIT_AND_SET_TASKS = 'WAIT_AND_SET_TASKS'
export const SAVE_NEW_TASK = 'SAVE_NEW_TASK'


//ACTION CREATORS
export var initTasks=function(){
    return {
        type:INIT_ALL_TASKS
    }
}

export var notifyFetchTasks = function(){
    return {
        type:BEGIN_FETCH_ALL_TASKS
    }
}
export var setTasks = function(tasks){
    return {
        type:WAIT_AND_SET_TASKS,
        tasks
    }
}
export var saveTask = function({client,employee,due_date}){
    return {
        type:SAVE_NEW_TASK,
        client,
        employee,
        due_date,
        date:new Date().toLocaleDateString()
    }
}
export var fetchTasks=function(){
    return (dispatch)=>{
        dispatch(notifyFetchTasks())
        setTimeout(function(){
            dispatch(setTasks(_Tasks(20)))
        },2000)
        return;
    }
}



