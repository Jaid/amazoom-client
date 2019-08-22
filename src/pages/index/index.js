import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import {connect} from "react-redux"
import emitPromise from "emit-promise"
import socket from "lib/socketMiddleware"
import ProductBlock from "components/ProductBlock"

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

@connect(null, dispatch => ({
  fetch: () => dispatch({
    type: "@@socket/send/getOverview",
  }),
}))

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

  state = {}

  componentDidMount() {
    const fetchJob = emitPromise.withDefaultTimeout(socket, "getOverview")
    fetchJob.then(data => {
      this.setState({data})
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    if (!this.state.data) {
      return "..."
    }
    const productList = this.state.data.map((productState, index) => <ProductBlock key={index} title={productState["Product.title"]} {...productState}/>)
    return <main className={classnames(css.container, this.props.className)}>
      <div className={css.productList}>{productList}</div>
    </main>
  }

}