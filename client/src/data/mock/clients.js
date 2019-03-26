import Faker from 'faker'

export const _Client=()=>{
    return {
        name:Faker.name.findName(),
        city:Faker.helpers.createCard().address.city,
        state:Faker.helpers.createCard().address.state,
        country:Faker.helpers.createCard().address.country
    }
}
export const _Clients=(num)=>{
    let clients = []
    for (let index = 1; index <= num; index++) {
        clients.push(_Client())
    }
    return clients;
}
