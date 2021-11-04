import Users from "./Users";
import { connect } from "react-redux";
import { setUsersAC, subscriberAC } from "../../redux/Reducers/usersReducer";

let mapStateToProps = (state) => ({ users: state.usersPage.users })
let mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (userId) => {
            dispatch(subscriberAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersConnect = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersConnect