import {faker} from "@faker-js/faker";
import {getRandomInt} from "./utils";

export async function getUser() {
    var logged = localStorage.getItem('loggedin')
    return {
        loggedIn: logged,
        uid: 'xycvvvgd'
    }
}

export async function getUserDetails() {

    return {
        id: 'xycvvvgd',
        first_name: 'John',
        last_name: 'Doe',
        phone: '+357 99191234',
        email: 'johndoe@xyz.com',
        seller: false
    }
}

export const userStatus = [
    {name: 'verifying ',indicator: 'processing'},
    {name: 'Blocked',indicator: 'error'},
    {name: 'Normal',indicator: 'success'},
    {name: 'Suspicious',indicator: 'warning'},
    {name: 'Unverified',indicator: 'warning'},
]

export function getClients(num = 25){
    let clients = [];
    for (let i =0;i <= num; i++){
        clients.push({
            id: i,
            name: faker.person.fullName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            dob: faker.date.birthdate({min: 18, mode: 'age'}),
            status: userStatus.at(getRandomInt(userStatus.length - 1)).name
        })
    }
    return clients;
}