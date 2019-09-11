import React from "react"
import ProductBlock from "components/ProductBlock"
import setupPage, {propTypes} from "src/pages/setupPage"

import css from "./style.scss"

/**
  * @class
  * @extends {React.Component}
  */
class IndexPage extends React.Component {

  static propTypes = propTypes

  render() {
    const productList = this.props.data.map((productState, index) => <ProductBlock key={index} {...productState}/>)
    return <main className={css.container}>
      <div className={css.productList}>{productList}</div>
    </main>
  }

}

export default setupPage("getOverview")(IndexPage)