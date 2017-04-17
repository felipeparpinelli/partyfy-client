import {getPlaylist} from '../playlist/playlistActions'

export function selectItem(userID, itemName, itemId) {
    return [
        {type: 'ITEM_SELECTED', payload: [itemId, itemName]},
        getPlaylist(userID, itemId)
    ]
}
