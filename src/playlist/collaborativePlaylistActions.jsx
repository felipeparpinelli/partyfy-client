import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8081/api'
const user_id = "felipeparpinelli"

export function selectTrack(trackId) {
    return {
      type: 'TRACK_SELECTED',
      payload: trackId
    }
}

export function getCollaborativePlaylist() {
    const request = axios.get(`${BASE_URL}/v1/collaborativeplaylist`)
    return {
        type: 'PARTY_FETCHED',
        payload: request
    }
}
