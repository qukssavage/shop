import { useState, useMemo } from 'react'
import { useProducts } from './hooks/useProducts'
import { Header } from './components/Header/Header'
import { SearchBar } from './components/SearchBar/SearchBar'
import { CategoryFilter } from './components/CategoryFilter/CategoryFilter'
import { SortButtons } from './components/SortButtons/SortButtons'
import { ProductCard } from './components/ProductCard/ProductCard'
import { ScrollTopButton } from './components/ScrollTopButton/ScrollTopButton'
import bgPattern from './assets/images/bg-pattern.svg'
import './App.css'

function App() {
  const products = useProducts()
  const [sortType, setSortType]         = useState(null)
  const [sortKey, setSortKey]           = useState(0)
  const [searchQuery, setSearchQuery]   = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const handleSort = (type) => {
    setSortType(type)
    setSortKey(k => k + 1)
  }

  const categories = useMemo(
    () => ['all', ...new Set(products.map(p => p.category).sort())],
    [products]
  )

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase()

    const afterFilter = products.filter(p => {
      const matchSearch = !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      const matchCat = activeCategory === 'all' || p.category === activeCategory
      return matchSearch && matchCat
    })

    return [...afterFilter].sort((a, b) => {
      if (sortType === 'price') return a.price - b.price
      if (sortType === 'title') return a.title.localeCompare(b.title)
      return 0
    })
  }, [products, searchQuery, activeCategory, sortType])

  return (
    <>
      <Header />

      <div className="app" style={{ backgroundImage: `url(${bgPattern})` }}>
        <div className="controls">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <SortButtons sortType={sortType} onSort={handleSort} productCount={filtered.length} />
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

        <div className="products-grid">
          {filtered.map((product, index) => (
            <ProductCard
              key={`${product.id}-${sortKey}`}
              product={product}
              index={index}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="no-results">Ничего не найдено 🔍</p>
        )}
      </div>

      <ScrollTopButton />
    </>
  )
}

export default App
