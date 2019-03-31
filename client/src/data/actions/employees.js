//import API from '../api/authenticatedAPICall'
import {_Employees} from '../mock/employees'


//ACTIONS
export const INIT_EMPLOYEES = 'INIT_EMPLOYEES'
export const BEGIN_FETCH_EMPLOYEES = 'BEGIN_FETCH_EMPLOYEES'
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES'

//ACTION CREATORS
export var initEmployees=function(){
    return {
        type:INIT_EMPLOYEES
    }
}

export var notifyFetchEmployees = function(){
    return {
        type:BEGIN_FETCH_EMPLOYEES,

    }
}
export var setEmployees = function(employees){
    return {
        type:FETCH_EMPLOYEES,
        employees
    }
}
export var fetchEmployees=function(){
    return (dispatch)=>{
        dispatch(notifyFetchEmployees())
        setTimeout(function(){
            dispatch(setEmployees(_Employees(12)))
        },2000)
        return;
    }
}

