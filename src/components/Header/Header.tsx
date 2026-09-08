import './Header.css'

function Header() {
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
    </header>
  )
}

export default Header
