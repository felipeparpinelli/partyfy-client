const INITIAL_STATE = {playlist: {tracks:{items:[]}}}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'PLAYLIST_FETCHED':
        return {...state, playlist: action.payload.data}
      default:
        return state
    }
}
