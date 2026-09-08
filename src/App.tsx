import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CategoryTabs from './components/CategoryTabs/CategoryTabs'
import ProductList from './components/ProductList/ProductList'
import { products as productData, type Product } from './data/products'

function App() {
  const [cart, setCart] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const categories = ['Todos', ...new Set(productData.map((product) => product.category))]
  const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase('es-CL')
  const filteredProducts = productData.filter((product) => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory
    const matchesSearch =
      product.name.toLocaleLowerCase('es-CL').includes(normalizedSearchTerm) ||
      product.category.toLocaleLowerCase('es-CL').includes(normalizedSearchTerm)

    return matchesCategory && matchesSearch
  })

  function handleAddToCart(product: Product) {
    setCart((currentCart) => [...currentCart, product])
  }

  return (
    <div className="app">
      <Header
        cartCount={cart.length}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <main className="app__content">
        <section className="app__catalog" aria-label="Catálogo de productos">
          <div className="app__filters">
            <CategoryTabs
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
