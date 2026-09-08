import type { Product } from '../../data/products'
import Button from '../Button/Button'
import './ProductCard.css'

type ProductCardProps = {
  product: Product
  onAddToCart: (product: Product) => void
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(product.price)

  return (
    <article className="product-card">
      <img className="product-card__image" src={product.image} alt={product.name} />
      <div className="product-card__content">
        <div>
          <p className="product-card__category">{product.category}</p>
          <h2 className="product-card__name">{product.name}</h2>
        </div>
        <div className="product-card__footer">
          <p className="product-card__price">{formattedPrice}</p>
          <Button onClick={() => onAddToCart(product)}>Agregar</Button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
