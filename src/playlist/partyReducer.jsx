const INITIAL_STATE = {party: {Track:[]}}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'PARTY_FETCHED':
        return {...state, party: action.payload.data}
      default:
        return state
    }
}
