const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const SET_FETCHING_STATUS = 'SET-FETCHING-STATUS'
const TOGGLE_FOLLOW_BUTTON_DISABLED = 'TOGGLE_FOLLOW_BUTTON_DISABLED'


let initialState = {

    users: [],
    pageSize: 20,
    currentPage: 1,
    totalPages: 0,
    isFetching: false,
    followButtonDisabled: false
}


const usersReducers = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {
                    ...user,
                    followed: !user.followed
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
        case SET_FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_FOLLOW_BUTTON_DISABLED:
            return {
                ...state,
                followButtonDisabled: action.followButtonDisabled,
            }
        default :
            return state
    }

}

const subscribe = userId => ({ type: TOGGLE_SUBSCRIBE, userId })
const setUsers = users => ({ type: SET_USERS, users })
const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
const setTotalPages = totalPages => ({ type: SET_TOTAL_COUNT, totalPages })
const setFetchingStatus = isFetching => ({ type: SET_FETCHING_STATUS, isFetching })
const toggleFollowButtonDisabled = followButtonDisabled => ({
    type: TOGGLE_FOLLOW_BUTTON_DISABLED,
    followButtonDisabled
})

export { subscribe, setUsers, setCurrentPage, setTotalPages, setFetchingStatus, toggleFollowButtonDisabled }

export default usersReducers