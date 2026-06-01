import './CategoryFilter.css'

const LABELS = {
  all:                  'Все',
  smartphones:          'Смартфоны',
  laptops:              'Ноутбуки',
  fragrances:           'Парфюмерия',
  skincare:             'Уход за кожей',
  groceries:            'Продукты',
  'home-decoration':    'Декор дома',
  furniture:            'Мебель',
  tops:                 'Топы',
  'womens-dresses':     'Платья',
  'womens-shoes':       'Обувь (жен.)',
  'mens-shirts':        'Рубашки',
  'mens-shoes':         'Обувь (муж.)',
  'mens-watches':       'Часы (муж.)',
  'womens-watches':     'Часы (жен.)',
  'womens-bags':        'Сумки',
  'womens-jewellery':   'Украшения',
  sunglasses:           'Очки',
  automotive:           'Авто',
  motorcycle:           'Мото',
  lighting:             'Освещение',
  beauty:               'Красота',
  'sports-accessories': 'Спорт',
  vehicle:              'Авто аксессуары',
}

export function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="category-filter">
      {categories.map(cat => (
        <button
          key={cat}
          className={`category-chip${active === cat ? ' active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {LABELS[cat] ?? cat}
        </button>
      ))}
    </div>
  )
}
