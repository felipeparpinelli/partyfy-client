import React from 'react'
import Player from '../../player/playerContent'

let track = "2TpxZ7JUBn3uw46aR7qd6V"
let trackUrl = `https://embed.spotify.com/?uri=spotify:track:${track}`

export default props => (
    <footer className='main-footer'>
        <strong>
            <Player />
        </strong>
    </footer>
)
