export default {
    tasks:{
        active:[],
        loaded:false,
        tasks:[],
        view:{
            active:{
                activeIndex:-1
            },
            selected:null,
            waiting:true
        }
    },
    client:{
        loaded:false,
        waiting:false,
        clients:{},
        view:{
            selectedIndex:-1,
            fenceCoords:[]
        }
    }
}