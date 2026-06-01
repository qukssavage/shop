import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { PriceTagIcon } from '../../assets/icons/index.jsx'
import './ProductCard.css'

const MAX_CHARS = 100

function StarRating({ rating }) {
  const filled = Math.round(rating)
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`star${i < filled ? ' filled' : ''}`}>★</span>
      ))}
      <span className="rating-num">{rating.toFixed(1)}</span>
    </div>
  )
}

export function ProductCard({ product, index }) {
  const [modalOpen, setModalOpen] = useState(false)
  const isLong = product.description.length > MAX_CHARS

  const discountedPrice = (
    product.price * (1 - product.discountPercentage / 100)
  ).toFixed(2)

  const discountLabel = `-${Math.round(product.discountPercentage)}%`

  return (
    <>
      <div
        className="product-card"
        style={{ animationDelay: `${Math.min(index * 40, 320)}ms` }}
      >
        <h3 className="product-title">{product.title}</h3>

        <div className="description-area">
          <p className="product-description">{product.description}</p>
        </div>
        <div className="expand-placeholder">
          {isLong && (
            <button className="expand-btn" onClick={() => setModalOpen(true)}>
              Ещё
            </button>
          )}
        </div>

        <div className="image-wrap">
          <span className="discount-badge">{discountLabel}</span>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />
        </div>

        <StarRating rating={product.rating} />

        <div className="price-section">
          <p className="product-price">
            <PriceTagIcon />
            Цена: {discountedPrice}$
          </p>
          <p className="product-original">
            Без скидки: <span className="strikethrough">{product.price}$</span>
          </p>
        </div>
      </div>

      {modalOpen && (
        <Modal product={product} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}
