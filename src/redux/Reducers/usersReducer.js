const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

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


let initialState = {

    users: [],
    pageSize: 20,
    currentPage: 1,
    totalPages: 0,

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
                users: [ ...action.users ],
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalPages: action.totalPages,
            }
        default :
            return state
    }

}

const subscriberAC = userId => ({ type: TOGGLE_SUBSCRIBE, userId })
const setUsersAC = users => ({ type: SET_USERS, users })
const setCurrentPagesAC = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
const setTotalCountAC = totalPages => ({ type: SET_TOTAL_COUNT, totalPages })

export { subscriberAC, setUsersAC, setCurrentPagesAC, setTotalCountAC }

export default usersReducers