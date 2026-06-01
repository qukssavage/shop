import { SearchIcon } from '../../assets/icons/index.jsx'
import './SearchBar.css'

export function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-icon"><SearchIcon size={17} /></span>
      <input
        className="search-input"
        type="text"
        placeholder="Поиск товаров..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {value && (
        <button className="search-clear" onClick={() => onChange('')}>✕</button>
      )}
    </div>
  )
}
