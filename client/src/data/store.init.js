import {_Tasks} from './mock/tasks'
let tasks = _Tasks(3)
export default {
    tasks:{
        active:tasks,
        view:{
            active:{
                activeIndex:0
            },
            selected:tasks[0],
            waiting:true
        }
    },
    client:{
        loaded:false,
        waiting:false,
        clients:{},
        selectedIndex:0
    }
}