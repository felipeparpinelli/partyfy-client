import axios from 'axios'
import {getCollaborativePlaylist} from './collaborativePlaylistActions'

const BASE_URL = 'http://127.0.0.1:8081/api'

export function getPlaylist(user_id, playlist_id) {
    const request = axios.get(`${BASE_URL}/v1/users/${user_id}/playlists/${playlist_id}`)
    return {
        type: 'PLAYLIST_FETCHED',
        payload: request
    }
}

export const addTrack = (userID, track) => {
    return dispatch => {
          let data = new FormData();
          data.append('userID', userID);
          data.append('trackID', track.id);
          data.append('trackName', track.name);
        axios.post(`${BASE_URL}/v1/addtrack`, data)
            .then(resp => dispatch(getCollaborativePlaylist()))
    }
}
