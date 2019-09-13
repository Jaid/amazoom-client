import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import icon from "root/icon.png"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import LoginBox from "components/LoginBox"

import css from "./style.scss"

/**
  * @typedef {{
  *  className: *
  * }} Props
  */

@connect(state => ({
  loginInfo: state.login,
}))

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class Header extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
  }

  render() {
    return <div className={classnames(css.container, this.props.className)}>
      <Link to="/"><img className={css.icon} src={icon}/></Link>
      <LoginBox/>
      {/* {this.props.loginInfo.authUrl && !this.props.loginInfo.loggedIn
       && <a href={this.props.loginInfo.authUrl}>Login</a>
      } */}
    </div>
  }

}