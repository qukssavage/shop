import { useState, useEffect } from 'react'
import { ArrowUpIcon } from '../../assets/icons/index.jsx'
import './ScrollTopButton.css'

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`scroll-top-btn${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Наверх"
    >
      <ArrowUpIcon />
    </button>
  )
}
