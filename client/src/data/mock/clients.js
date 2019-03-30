import Faker from 'faker'

export const _Client=()=>{
    return {
        name:Faker.name.findName(),
        city:Faker.helpers.createCard().address.city,
        state:Faker.helpers.createCard().address.state,
        country:Faker.helpers.createCard().address.country,
        pincode:Faker.helpers.createCard().address.zipcode,
        phone:Faker.phone.phoneNumber(),
        area:"SOUTH",
        territory:"S2",
        code:parseInt(Math.random()*1000),
        sector:"1C" 
    }
}
export const _Clients=(num)=>{
    let clients = []
    for (let index = 1; index <= num; index++) {
        clients.push(_Client())
    }
    return clients;
}
