import React, {Component} from 'react'
import MenuItem from './menuItem'

import {bindActionCreators} from 'redux'
import {selectItem} from './menuItemActions'
import {connect} from 'react-redux'
import {getPlaylists} from './menuActions'

class Menu extends Component {

    render() {
      const {items} = this.props.playlists
        return (
          <div className='sidebar-menu-title'>
            <h3>Playlists</h3>
            <ul className='sidebar-menu'>
              {items.map (item =>
                <MenuItem key={item.name} path='#/' label={item.name} id={item.id} />)}
            </ul>
          </div>
        )
    }
}

const mapStateToProps = state => ({playlists: state.menu.playlists})
const mapDispatchToProps = dispatch => bindActionCreators({selectItem, getPlaylists}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Menu)
