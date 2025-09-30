import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import styles from './Navbar.module.css';
import logo from '/logo.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <img src={logo} alt="الساتر" className={styles.logoImage} />
            <span className={styles.logoText}>AL-SATER</span>
          </Link>

          <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            <Link 
              to="/" 
              className={styles.navLink}
              onClick={closeMenu}
            >
              الرئيسية
            </Link>
            <button 
              className={styles.navLink}
              onClick={() => scrollToSection('products')}
            >
              المنتجات
            </button>
            <button 
              className={styles.navLink}
              onClick={() => scrollToSection('about')}
            >
              من نحن
            </button>
            <button 
              className={styles.navLink}
              onClick={() => scrollToSection('contact')}
            >
              تواصل معنا
            </button>
          </div>

          <div className={styles.navActions}>
            <button 
              className={styles.cartButton}
              onClick={() => setIsCartOpen(true)}
              aria-label="عرض سلة المشتريات"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {getCartCount() > 0 && (
                <span className={styles.cartBadge}>{getCartCount()}</span>
              )}
            </button>

            <button 
              className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      
      {/* Mobile menu overlay - only show when menu is open */}
      {isMenuOpen && (
        <div 
          className={styles.mobileOverlay}
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
