import { products as productData, type Product } from '../../data/products'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

type ProductListProps = {
  products?: Product[]
  onAddToCart: (product: Product) => void
}

function ProductList({ products = productData, onAddToCart }: ProductListProps) {
  return (
    <section className="product-list" aria-label="Productos disponibles">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </section>
  )
}

export default ProductList
