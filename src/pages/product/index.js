import React from "react"
import setupPage, {propTypes} from "src/pages/setupPage"
import DocumentTitle from "react-document-title"

import css from "./style.scss"

@setupPage(props => ({
  event: "product",
  payload: props.match.params.id,
}))
export default class extends React.Component {

  static propTypes = propTypes

  render() {
    const stateBlocks = this.props.data.ProductStates.map(({platform, currency, title, price}) => <div key={platform}>{platform}: {title} {price / 100} {currency}</div>)
    return <DocumentTitle title={this.props.data.title}>
      <main className={css.container}>
        <div className={css.productList}>{this.props.data.title}</div>
        {stateBlocks}
      </main>
    </DocumentTitle>
  }

}