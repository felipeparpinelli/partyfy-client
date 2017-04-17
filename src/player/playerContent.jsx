import React, {Component} from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


class PlayerContent extends Component {

    render() {
        //spotify:user:felipeparpinelli:playlist:6zE7120hitDj9lV3Z4dzGT
        const track = this.props.track.id
        if (track === "")
        {
            return null
        }
        return (
          <iframe src={`https://embed.spotify.com/?uri=spotify:track:${track}`} width="100%" height="80" frameBorder="0"></iframe>
        )
    }
}

const mapStateToProps = state => ({track: state.collaborativePlaylist})
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PlayerContent)
