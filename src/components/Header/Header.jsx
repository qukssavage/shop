import { useState, useEffect } from 'react'
import { BagIcon, TelegramIcon, InstagramIcon, FacebookIcon, PhoneIcon } from '../../assets/icons/index.jsx'
import './Header.css'

const SOCIAL_LINKS = [
  { icon: TelegramIcon,  label: 'Telegram',  href: 'https://t.me/',          color: '#2aabee' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/',  color: '#e1306c' },
  { icon: FacebookIcon,  label: 'Facebook',  href: 'https://facebook.com/',   color: '#1877f2' },
  { icon: PhoneIcon,     label: 'Позвонить', href: 'tel:+1234567890',         color: '#22c55e' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(prev => {
        if (!prev && y > 60) return true
        if (prev && y < 5) return false
        return prev
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">

        <div className="header-logo">
          <div className="header-icon-wrap">
            <BagIcon size={scrolled ? 36 : 52} />
          </div>
          <div className="header-titles">
            <span className="header-brand">PurpleShop</span>
            <span className="header-tagline">Каталог товаров</span>
          </div>
        </div>

        <div className="header-socials">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title={label}
              style={{ '--brand': color }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

      </div>
    </header>
  )
}
