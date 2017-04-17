import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {login, logout} from './loginActions'

class LoginContent extends Component {

    render() {
        if(this.props.userID == '') {
          return (
            <button className="navbar-btn" onClick={this.props.login}>
                <i className='btn btn-success'>Entrar com Spotify</i>
            </button>
          )
        }
        return (
              <h4 className="user-name"> {this.props.userID} </h4>
              // <button className="navbar-btn" onClick={this.props.logout}>
              //     <i className='btn btn-success'>logout</i>
              // </button>
        )
    }
}

const mapStateToProps = state => ({userID: state.userID.userID})
const mapDispatchToProps = dispatch => bindActionCreators({login, logout}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LoginContent)
