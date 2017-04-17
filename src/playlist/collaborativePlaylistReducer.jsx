const INITIAL_STATE = {id: ''}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "TRACK_SELECTED":
          return {id:action.payload}
      default:
          return state
    }
}
