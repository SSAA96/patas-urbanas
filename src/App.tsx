import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <ProductList />
      </main>
      <Footer />
    </div>
  )
}

export default App
