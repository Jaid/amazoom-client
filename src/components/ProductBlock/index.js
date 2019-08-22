import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

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
export default class ProductBlock extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
    title: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    platform: PropTypes.string,
  }

  render() {
    return <div className={classnames(css.container, this.props.className)}>
      <div>{this.props.title}</div>
      <div>{this.props.price / 100} {this.props.currency} on {this.props.platform}</div>
    </div>
  }

}