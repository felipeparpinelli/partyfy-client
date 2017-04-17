export const getUser = (userID) => {
    return {type: 'USER_LOGGED', payload: userID}
}
