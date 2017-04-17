import axios from 'axios'
import {selectItem} from './menuItemActions'

const BASE_URL = 'http://127.0.0.1:8081/api'

export function getPlaylists(user_id) {
    const request = axios.get(`${BASE_URL}/v1/users/${user_id}/playlists`)
    return {
        type: 'PLAYLISTS_FETCHED',
        payload: request
    }
}
