const UPDATE_POST_MESSAGE = ' UPDATE-POST-MESSAGE'

const idGenerator = () => Math.random().toString(36).substr(2, 20);

let initialState = {
    users: [
        {
            id: idGenerator(),
            fullName: 'Alex',
            status: 'Im happy now :)',
            followerd: true,
            location: {
                country: 'UA',
                city: 'Zhytomyr'
            }
        }, {
            id: idGenerator(),
            fullName: 'Merry',
            status: 'Im very happy !!! :)',
            followerd: false,
            location: {
                country: 'BU',
                city: 'Minsk'
            }
        }, {
            id: idGenerator(),
            fullName: 'Tony',
            status: 'To old for this shit 8)',
            followerd: true,
            location: {
                country: 'USA',
                city: 'NY',
            }
        },
    ],

    inputMessage: '',
    buttonDisabled() {
        return this.inputMessage.length < 1
    }
}

const usersReducers = (state = initialState, action) => {

    switch (action.type) {
        case
        UPDATE_POST_MESSAGE :
            return { ...state, inputMessage: action.message }
        default :
            return state
    }

}

// export const updatePostMessageAction = text => ({ type: UPDATE_POST_MESSAGE, message: text })

export default usersReducers