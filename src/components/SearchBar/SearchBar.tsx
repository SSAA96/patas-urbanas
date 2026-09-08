import './SearchBar.css'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar" role="search">
      <label className="search-bar__label" htmlFor="product-search">
        Buscar productos
      </label>
      <div className="search-bar__field">
        <span className="search-bar__icon" aria-hidden="true">
          🔍
        </span>
        <input
          id="product-search"
          className="search-bar__input"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Ej: collar, cama o juguete"
        />
        {value && (
          <button
            className="search-bar__clear"
            type="button"
            onClick={() => onChange('')}
            aria-label="Limpiar búsqueda"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
