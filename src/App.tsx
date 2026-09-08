import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList'
import type { Product } from './data/products'

function App() {
  const [cart, setCart] = useState<Product[]>([])

  function handleAddToCart(product: Product) {
    setCart((currentCart) => [...currentCart, product])
  }

  return (
    <div className="app">
      <Header cartCount={cart.length} />
      <main className="app__content">
        <ProductList onAddToCart={handleAddToCart} />
      </main>
      <Footer />
    </div>
  )
}

export default App
