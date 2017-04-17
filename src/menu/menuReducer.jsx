const INITIAL_STATE = {playlists: {items:[{name:'', id:''}]}}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'PLAYLISTS_FETCHED':
        // Filtro para remover a playlist default "discover weekly", a API do
        // Spotify retorna essa playlist para qualquer usuário.
        action.payload.data.items = action.payload.data.items.filter(item => item.name !== "Discover Weekly")
        return {...state, playlists: action.payload.data}
      default:
        return state
    }
}
