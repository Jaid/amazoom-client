import React from "react"
import {connect} from "react-redux"
import emitPromise from "emit-promise"
import socket from "lib/socketMiddleware"
import PropTypes from "prop-types"
import {isFunction} from "lodash"
import ensureObject from "ensure-object"

export default socketCommand => Component => {
  const FetchingPage = class extends React.Component {

    constructor(props) {
      super(props)
      if (isFunction(socketCommand)) {
        this.socketCommand = socketCommand(props)
      } else {
        this.socketCommand = socketCommand
      }
      this.socketCommand = ensureObject(this.socketCommand, "event")
    }

  state = {}

  componentDidMount() {
    let fetchJob
    if (this.socketCommand.payload === undefined) {
      fetchJob = emitPromise.withDefaultTimeout(socket, this.socketCommand.event)
    } else {
      fetchJob = emitPromise.withDefaultTimeout(socket, this.socketCommand.event, this.socketCommand.payload)
    }
    fetchJob.then(data => {
      console.log(data)
      this.setState({data})
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    if (!this.state.data) {
      return `Loading ${this.socketCommand.event}`
    }
    return <Component data={this.state.data} {...this.props}/>
  }

  }
  return FetchingPage
}

/**
  * @typedef {{
  *  match: {
  *    isExact: boolean
  *    path: string
  *    url: string
  *    params: object.<string, string>
  *  },
  *  data: *,
  * }} Props
  */

export const propTypes = {
  match: PropTypes.exact({
    isExact: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.object,
  }).isRequired,
  className: PropTypes.any,
  data: PropTypes.any,
}