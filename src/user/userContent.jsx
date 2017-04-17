import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Menu from '../menu/menu'
import Playlist from '../playlist/playlistContent'
import {getPlaylists} from '../menu/menuActions'
import {getUser} from './userActions'


class UserContent extends Component {

    componentDidMount() {
        // Obtido pelo react-router
        const {dispatch, params} = this.props
        const {userID} = params
        this.props.getPlaylists(userID)
        this.props.getUser(userID)
    }

    render() {
        return (
          <h1></h1>
        )
    }
}

const mapStateToProps = state => ({userID: state.userID.userID, playlists: state.menu.playlists})
const mapDispatchToProps = dispatch => bindActionCreators({getPlaylists, getUser}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserContent)
