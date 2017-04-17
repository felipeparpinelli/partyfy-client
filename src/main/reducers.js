import {combineReducers} from 'redux'
import MenuReducer from '../menu/menuReducer'
import MenuItemReducer from '../menu/menuItemReducer'
import PlaylistReducer from '../playlist/playlistReducer'
import CollaborativePlaylistReducer from '../playlist/collaborativePlaylistReducer'
import PartyReducer from '../playlist/partyReducer'
import UserReducer from '../user/userReducer'

const rootReducer = combineReducers({
    menu: MenuReducer,
    menuItem: MenuItemReducer,
    playlist: PlaylistReducer,
    collaborativePlaylist: CollaborativePlaylistReducer,
    userID: UserReducer,
    party: PartyReducer
})

export default rootReducer
