import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import css from "./style.scss"

/**
  * @typedef {{
  *   match: {
  *    isExact: boolean
  *    path: string
  *    url: string
  *    params: object.<string, string>
  *  },
  * }} Props
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class IndexPage extends React.Component {

  static propTypes = {
    match: PropTypes.exact({
      isExact: PropTypes.bool.isRequired,
      path: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      params: PropTypes.object,
    }).isRequired,
    className: PropTypes.any,
  }

  render() {
    const content = <span>Page index</span>
    return <main className={classnames(css.container, this.props.className)}>
      {content}
    </main>
  }

}