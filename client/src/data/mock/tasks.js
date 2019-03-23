import Faker from 'faker'

export const _Profile=()=>{
    return {
        avatar:"https://placekitten.com/"+parseInt((Math.random()*100)%100) +"/"+parseInt((Math.random()*100)%100),
        name:Faker.name.findName()
    }
}
export const _Profiles=(num)=>{
    let users = []
    for (let index = 1; index <= num; index++) {
        users.push(_Profile())
    }
    return users;
}
export const _CheckPoint=()=>{
    return {
        location:Faker.helpers.createCard().address.city,
        datetime:Faker.date.recent().toLocaleDateString()
    }
}

export const _CheckPoints=(num)=>{
    let users = []
    for (let index = 1; index <= num; index++) {
        users.push(_CheckPoint())
    }
    return users;
}

export const _Task=()=>{
    const routeLimit= 3 + parseInt(Math.random()*100) % 10;
    return {
        date:Faker.date.recent().toLocaleDateString(),
        status: !!(Math.random()>0.5),
        begunFrom: Faker.helpers.createCard().address.city+ " " +Faker.helpers.createCard().address.country + " " +Faker.helpers.createCard().address.state,
        to:Faker.helpers.createCard().address.city+ " " +Faker.helpers.createCard().address.country + " " +Faker.helpers.createCard().address.state,
        checkpoints:_CheckPoints(routeLimit),
        deadLine:Faker.date.future().toLocaleDateString(),
        user:_Profile(),
        checkpointsRaw:_GPSTrace(routeLimit)
    }
}

export const _Tasks=(num)=>{
    let users = []
    for (let index = 1; index <= num; index++) {
        users.push(_Task())
    }
    return users;
}

export const _GPSTrace=(num)=>{
    
    const randomSplit=()=>{
        const rand = Math.random()
        return (rand>0.5)? rand:rand*-1;
    }
    const getLocationNear=(latLng)=>{
        return {
            lat:latLng.lat + randomSplit(),
            lng:latLng.lng + randomSplit()
        }
    }
    var gpsTrace = [{
        lat: 10.774,
        lng: 76.75
    }]
    for (let index = 1; index <= num; index++) {
        gpsTrace.push(getLocationNear(gpsTrace[gpsTrace.length-1]))
    }
    var destination = gpsTrace.pop();
    return {
        checkpoints:gpsTrace,
        to:destination
    }
}
