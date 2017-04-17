import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getPlaylist, addTrack} from './playlistActions'

class PlaylistContent extends Component {

    componentWillMount() {
    }

    render() {
        return (
          <div className='playlist-content'>
            <h3> Playlist {this.props.menuItem.selected} </h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Música</th>
                        <th>Artista</th>
                        <th className='table-actions'></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
          </div>
        )
    }

    renderRows() {
        const list = this.props.playlist.tracks.items || []
        return list.map(playlist => (
            <tr key={playlist.track.name}>
                <td>{playlist.track.name}</td>
                <td>{playlist.track.artists[0].name}</td>
                <td>
                    <button className='btn btn-success' onClick={() => this.props.addTrack(this.props.userID, playlist.track)}>
                        <i className='fa fa-plus'></i>
                    </button>
                </td>
            </tr>
        ))
    }
}

const mapStateToProps = state => ({userID: state.userID.userID, menuItem: state.menuItem, playlist: state.playlist.playlist})
const mapDispatchToProps = dispatch => bindActionCreators({getPlaylist, addTrack}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContent)
