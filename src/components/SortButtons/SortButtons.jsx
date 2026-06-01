import { SortAlphaIcon, SortPriceIcon } from '../../assets/icons/index.jsx'
import './SortButtons.css'

export function SortButtons({ sortType, onSort, productCount }) {
  return (
    <div className="sort-bar">
      <div className="sort-buttons">
        <button
          className={`sort-btn${sortType === 'title' ? ' active' : ''}`}
          onClick={() => onSort('title')}
        >
          <SortAlphaIcon />
          Сортировка по алфавиту
        </button>
        <button
          className={`sort-btn${sortType === 'price' ? ' active' : ''}`}
          onClick={() => onSort('price')}
        >
          <SortPriceIcon />
          Сортировка по цене
        </button>
      </div>

      {productCount > 0 && (
        <span className="product-count">{productCount} товаров</span>
      )}
    </div>
  )
}
