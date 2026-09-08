import type { Product } from '../../data/products'
import './ProductCard.css'

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(product.price)

  return (
    <article className="product-card">
      <img className="product-card__image" src={product.image} alt={product.name} />
      <div className="product-card__content">
        <p className="product-card__category">{product.category}</p>
        <h2 className="product-card__name">{product.name}</h2>
        <p className="product-card__price">{formattedPrice}</p>
      </div>
    </article>
  )
}

export default ProductCard
