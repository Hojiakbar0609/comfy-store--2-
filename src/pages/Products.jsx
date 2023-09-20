import Filter from "../components/Filter"

const url = '/products'
export const loader = async ({ request }) => {
  const response = await customFetch(url)
  const products = response.data.data
  const meta = response.data.meta
  return { products, meta }
}

import { ProductContainer, PaginationContainer } from "../components"

import { customFetch } from "../utils"
function Products() {
  return (
    <div className="align-elements">
      <Filter/>
      <ProductContainer/>
      <PaginationContainer/>
    </div>
  )
}

export default Products