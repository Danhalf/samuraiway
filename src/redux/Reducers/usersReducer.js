import { AvatarGenerator } from "random-avatar-generator";
import axios from "axios";

const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE'
const SET_USERS = 'SET-USERS'

// [
// {
//     id: idGenerator(),
//     fullName: 'Alex',
//     userAvatar: avatarGenerator.generateRandomAvatar(),
//     status: 'Im happy now :)',
//     subscribed: true,
//     location: {
//         country: 'UA',
//         city: 'Zhytomyr'
//     }
// }, {
//     id: idGenerator(),
//     fullName: 'Merry',
//     userAvatar: avatarGenerator.generateRandomAvatar(),
//     status: 'Im very happy !!! :)',
//     subscribed: false,
//     location: {
//         country: 'BU',
//         city: 'Minsk'
//     }
// }, {
//     id: idGenerator(),
//     fullName: 'Tony',
//     userAvatar: avatarGenerator.generateRandomAvatar(),
//     status: 'To old for this shit 8)',
//     subscribed: true,
//     location: {
//         country: 'USA',
//         city: 'NY',
//     }
// },
// ]

// const idGenerator = () => Math.random().toString(36).substr(2, 20);
// const avatarGenerator = new AvatarGenerator();

const URL = `https://randomuser.me/api/`

let usersData = []

const userData = async () => axios.get(URL)
    .then(response => usersData.push(response.data.results[0]))

for (let i = 0; i < 5; i++) {
    userData()
}

console.log(usersData);

let initialState = {

    users: usersData,

    inputMessage: '',
    buttonDisabled() {
        return this.inputMessage.length < 1
    }
}


const usersReducers = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {
                    ...user,
                    subscribed: !user.subscribed
                } : user)
            }

        case SET_USERS:
            return {
                ...state,
                users: [ ...state.users, ...action.users ]
            }
        default :
            return state
    }

}

export const subscriberAC = userId => ({ type: TOGGLE_SUBSCRIBE, userId })
export const setUsersAC = users => ({ type: SET_USERS, users })

export default usersReducers