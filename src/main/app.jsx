import React from 'react'
import '../common/template/dependencies'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Playlist from '../playlist/playlistContent'
import CollaborativePlaylist from '../playlist/collaborativePlaylistContent'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
          {props.children}
          <Playlist />
          <CollaborativePlaylist />
        </div>
        <Footer />
    </div>

)
