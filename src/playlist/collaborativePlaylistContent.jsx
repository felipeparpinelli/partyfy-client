import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {selectTrack, getCollaborativePlaylist} from './collaborativePlaylistActions'

class CollaborativePlaylist extends Component {

    componentDidMount() {
        this.props.getCollaborativePlaylist()
    }

    render() {
        return (
          <div className='playlist-content'>
            <h3> Playlist {this.props.party.Name} </h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Música</th>
                        <th>Usuário</th>
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
        const list = this.props.party.Track || []
        return list.map(playlist => (
            <tr key={playlist.TrackID}>
                <td>{playlist.TrackName}</td>
                <td>{playlist.UserID}</td>
                <td>
                    <button className='btn btn-success' onClick={() => this.props.selectTrack(playlist.TrackID)}>
                        <i className='fa fa-play'></i>
                    </button>
                </td>
            </tr>
        ))
    }
}

const mapStateToProps = state => ({party: state.party.party})
const mapDispatchToProps = dispatch => bindActionCreators({selectTrack, getCollaborativePlaylist}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CollaborativePlaylist)
