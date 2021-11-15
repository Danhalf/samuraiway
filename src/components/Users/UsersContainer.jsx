import Users from "./Users";
import { connect } from "react-redux";
import { setCurrentPagesAC, setUsersAC, subscriberAC, setTotalCountAC } from "../../redux/Reducers/usersReducer";

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalPages: state.usersPage.totalPages
})
let mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (userId) => {
            dispatch(subscriberAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPagesAC(currentPage))
        },
        setTotalPages: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },

    }
}

const UsersConnect = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersConnect