import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectItem} from './menuItemActions'

class MenuItem extends Component {

    componentWillMount () {

    }

    render() {
        let selected = false
        if (this.props.label != '') {
            selected = this.props.menuItem.selected === this.props.label
        }
        return (
          <li className={selected ? 'active' : ''}>
              <a href='javascript:;'
                data-toggle='menuItem'
                onClick={() => this.props.selectItem(this.props.userID, this.props.label, this.props.id)}
                data-target={this.props.label}>
                <i className={`fa fa-${this.props.icon}`}></i> <span>{this.props.label}</span>
              </a>
          </li>
        )
    }
}

const mapStateToProps = state => ({userID: state.userID.userID, menuItem: state.menuItem})
const mapDispatchToProps = dispatch => bindActionCreators({selectItem}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
