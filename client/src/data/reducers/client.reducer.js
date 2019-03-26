import initState from  '../store.init'
import {
    INIT_CLIENTS,
    BEGIN_FETCH_CLIENTS,
    FETCH_CLIENTS,
    VIEW_SELECT_CLIENT,
    SAVE_NEW_FENCE
} from '../actions/clients'
import {fromJS} from 'immutable'

export default function(state = initState,action ){
    const iState= fromJS(state)
    switch(action.type){

        case INIT_CLIENTS:
            return iState.setIn(['waiting'],false).setIn(['loaded'],false).toJS()

        case BEGIN_FETCH_CLIENTS:
            return iState.setIn(['waiting'],true).setIn(['loaded'],false).toJS()
        
        case FETCH_CLIENTS:
            return iState.setIn(['clients'],action.clients)
                            .setIn(['waiting'],false)
                                .setIn(['loaded'],true)
                                    .toJS()
        
        case VIEW_SELECT_CLIENT:
            return iState.setIn(['view','selectedIndex'],action.index).toJS()
        case SAVE_NEW_FENCE:
            return iState.setIn(['view','fenceCoords'],action.fence).toJS()
                                
        default:
            return state
    }
}