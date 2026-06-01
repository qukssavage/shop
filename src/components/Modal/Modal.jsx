import { useEffect } from 'react'
import { PriceTagIcon } from '../../assets/icons/index.jsx'
import './Modal.css'

export function Modal({ product, onClose }) {
  const discountedPrice = (
    product.price * (1 - product.discountPercentage / 100)
  ).toFixed(2)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="modal-image"
        />
        <h3 className="modal-title">{product.title}</h3>
        <p className="modal-description">{product.description}</p>
        <div className="modal-prices">
          <p className="modal-price">
            <PriceTagIcon />
            Цена: {discountedPrice}$
          </p>
          <p className="modal-original">
            Без скидки: <span className="modal-strikethrough">{product.price}$</span>
          </p>
        </div>
      </div>
    </div>
  )
}
