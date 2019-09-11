import React from "react"
import setupPage, {propTypes} from "src/pages/setupPage"

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
    return <main className={css.container}>
      <div className={css.productList}>{this.props.data.title}</div>
    </main>
  }

}

export default ProductPage