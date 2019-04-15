import Faker from 'faker'

export const _Employee=()=>{
    return {
        name:Faker.name.findName(),
        designation:(Math.random()>0.5)?"Manager":"Employee",
        phone:Faker.phone.phoneNumber(),
        area:"SOUTH",
        territory:"S2",
        code:parseInt(Math.random()*1000),
        sector:"1C" 
    }
}
export const _Employees=(num)=>{
    let clients = []
    for (let index = 1; index <= num; index++) {
        clients.push(_Employee())
    }
    return clients;
}
