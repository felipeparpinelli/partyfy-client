const INITIAL_STATE = {selected: '', id: ''}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "ITEM_SELECTED":
          return {selected:action.payload[1], id:action.payload[0]}
      default:
          return state
    }
}
