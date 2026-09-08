import { products as productData, type Product } from '../../data/products'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

type ProductListProps = {
  products?: Product[]
}

function ProductList({ products = productData }: ProductListProps) {
  return (
    <section className="product-list" aria-label="Productos disponibles">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ProductList
