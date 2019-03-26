//import API from '../api/authenticatedAPICall'
import {_Clients} from '../mock/clients'


//ACTIONS
export const INIT_CLIENTS = 'INIT_CLIENTS'
export const BEGIN_FETCH_CLIENTS = 'BEGIN_FETCH_CLIENTS'
export const FETCH_CLIENTS = 'FETCH_CLIENTS'
export const VIEW_SELECT_CLIENT = 'VIEW_SELECT_CLIENT'
export const SAVE_NEW_FENCE = 'SAVE_NEW_FENCE'

//ACTION CREATORS
export var initClients=function(){
    return {
        type:INIT_CLIENTS
    }
}

export var notifyFetchClients = function(){
    return {
        type:BEGIN_FETCH_CLIENTS,

    }
}
export var setClients = function(clients){
    return {
        type:FETCH_CLIENTS,
        clients
    }
}
export var fetchClients=function(clientId){
    return (dispatch)=>{
        dispatch(notifyFetchClients())
        setTimeout(function(){
            dispatch(setClients(_Clients(20)))
        },2000)
        return;
    }
}

export var selectClient = function(index){
    return {
        type:VIEW_SELECT_CLIENT,
        index
    }
}
export var saveFence = function(fence){
    return {
        type:SAVE_NEW_FENCE,
        fence
    }
}
