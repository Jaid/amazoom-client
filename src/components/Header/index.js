import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import icon from "root/icon.png"

import css from "./style.scss"

/**
  * @typedef {{
  *  className: *
  * }} Props
  */

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
      <img className={css.icon} src={icon}/>
    </div>
  }

}