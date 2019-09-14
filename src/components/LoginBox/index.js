import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import {connect} from "react-redux"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  * }} Props
  */


/**
  * @class
  * @extends {React.Component<Props>}
  */
@connect(state => ({
  displayName: state.login.displayName,
  authUrl: state.login.authUrl,
}))
export default class extends React.Component {

  displayName = "LoginBox"

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
  }

  getContent() {
    if (this.props.displayName) {
      return this.props.displayName
    }
    if (this.props.authUrl) {
      return <a href={this.props.authUrl}>Login</a>
    }
  }

  render() {
    return <div className={classnames(css.container, this.props.className)}>{this.getContent()}</div>
  }

}