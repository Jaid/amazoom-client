import React from "react"
import setupPage, {propTypes} from "src/pages/setupPage"
import DocumentTitle from "react-document-title"

import css from "./style.scss"

@setupPage(props => ({
  event: "product",
  payload: props.match.params.id,
}))

/**
  * @class
  * @extends {React.Component}
  */
class ProductPage extends React.Component {

  static propTypes = propTypes

  render() {
    return <DocumentTitle title={this.props.data.title}>
      <main className={css.container}>
        <div className={css.productList}>{this.props.data.title}</div>
      </main>
    </DocumentTitle>
  }

}

export default ProductPage