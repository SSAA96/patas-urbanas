import './Header.css'
import SearchBar from '../SearchBar/SearchBar'

type HeaderProps = {
  cartCount: number
  searchTerm: string
  onSearchChange: (value: string) => void
}

function Header({ cartCount, searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="/" aria-label="Ir al inicio de Patas Urbanas">
        <span className="site-header__logo" aria-hidden="true">
          🐾
        </span>
        <span className="site-header__brand-text">
          <span className="site-header__name">Patas Urbanas</span>
          <span className="site-header__tagline">Tienda para mascotas</span>
        </span>
      </a>
      <div className="site-header__search">
        <SearchBar value={searchTerm} onChange={onSearchChange} compact />
      </div>
      <div className="site-header__cart" aria-label={`${cartCount} productos en el carrito`}>
        <span aria-hidden="true">🛒</span>
        <span className="site-header__cart-label">Carrito</span>
        <span className="site-header__cart-count">{cartCount}</span>
      </div>
    </header>
  )
}

export default Header
