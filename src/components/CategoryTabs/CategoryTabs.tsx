import './CategoryTabs.css'

type CategoryTabsProps = {
  categories: string[]
  selectedCategory: string
  onSelect: (category: string) => void
}

function CategoryTabs({ categories, selectedCategory, onSelect }: CategoryTabsProps) {
  return (
    <nav className="category-tabs" aria-label="Filtrar productos por categoría">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-tabs__tab ${selectedCategory === category ? 'category-tabs__tab--active' : ''}`}
          type="button"
          aria-pressed={selectedCategory === category}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  )
}

export default CategoryTabs
