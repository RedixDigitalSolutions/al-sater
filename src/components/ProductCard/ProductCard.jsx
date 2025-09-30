import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiEye, FiHeart } from 'react-icons/fi';
import { BsLightningChargeFill } from 'react-icons/bs';
import QuickView from '../QuickView/QuickView';
import { useCart } from '../../context/CartContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();
  
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    if (product.inStock) {
      addToCart(product, product.sizes[0], product.colors[0], 1);
    }
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <>
      <div className={styles.card}>
        {/* Badges */}
        <div className={styles.badges}>
          {!product.inStock && (
            <div className={styles.outOfStockBadge}>نفذت الكمية</div>
          )}
          {product.isBestSeller && (
            <div className={styles.bestSellerBadge}>
              <BsLightningChargeFill /> الأكثر مبيعاً
            </div>
          )}
          {hasDiscount && (
            <div className={styles.discountBadge}>
              <span className={styles.discountPercent}>-{discountPercent}%</span>
            </div>
          )}
        </div>

        {/* Wishlist Button */}
        <button 
          className={`${styles.wishlistButton} ${isWishlisted ? styles.wishlisted : ''}`}
          onClick={handleWishlist}
        >
          <FiHeart />
        </button>

        {/* Image Section */}
        <Link to={`/product/${product.id}`} className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img 
              src={product.images[0]} 
              alt={product.nameAr} 
              className={styles.mainImage}
            />
            {product.images[1] && (
              <img 
                src={product.images[1]} 
                alt={product.nameAr} 
                className={styles.hoverImage}
              />
            )}
          </div>

          {/* Hover Actions */}
          <div className={styles.hoverActions}>
            <button 
              className={styles.actionButton}
              onClick={(e) => {
                e.preventDefault();
                setShowQuickView(true);
              }}
            >
              <FiEye />
              <span>عرض سريع</span>
            </button>
            {product.inStock && (
              <button 
                className={styles.actionButton}
                onClick={handleQuickAdd}
              >
                <FiShoppingCart />
                <span>إضافة سريعة</span>
              </button>
            )}
          </div>
        </Link>

        {/* Content Section */}
        <Link to={`/product/${product.id}`} className={styles.content}>
          <div className={styles.productInfo}>
            <h3 className={styles.name}>{product.nameAr}</h3>
            <p className={styles.nameEn}>{product.name}</p>
          </div>
          
          <div className={styles.footer}>
            <div className={styles.pricing}>
              <span className={styles.price}>
                {product.price} <span className={styles.currency}>{product.currency}</span>
              </span>
              {hasDiscount && (
                <span className={styles.originalPrice}>
                  {product.originalPrice} {product.currency}
                </span>
              )}
            </div>

            {product.colors && product.colors.length > 0 && (
              <div className={styles.colors}>
                {product.colors.slice(0, 3).map((color, index) => (
                  <span 
                    key={index} 
                    className={styles.colorDot}
                    style={{ backgroundColor: color }}
                    title={color}
                  ></span>
                ))}
                {product.colors.length > 3 && (
                  <span className={styles.moreColors}>+{product.colors.length - 3}</span>
                )}
              </div>
            )}
          </div>
        </Link>
      </div>

      {showQuickView && (
        <QuickView 
          product={product} 
          onClose={() => setShowQuickView(false)} 
        />
      )}
    </>
  );
};

export default ProductCard;
