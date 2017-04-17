const INITIAL_STATE = {userID: ''}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "USER_LOGGED":
          return {userID:action.payload}
      default:
          return state
    }
}
