import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import styles from './QuickView.module.css';

const QuickView = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, 1);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img src={product.images[selectedImage]} alt={product.nameAr} />
            <div className={styles.thumbnails}>
              {product.images.slice(0, 4).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.nameAr} ${index + 1}`}
                  className={selectedImage === index ? styles.active : ''}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          <div className={styles.info}>
            <h2>{product.nameAr}</h2>
            <p className={styles.nameEn}>{product.name}</p>
            
            <div className={styles.pricing}>
              <span className={styles.price}>{product.price} {product.currency}</span>
              {product.originalPrice && (
                <span className={styles.originalPrice}>{product.originalPrice} {product.currency}</span>
              )}
            </div>

            {product.sizes.length > 0 && (
              <div className={styles.optionGroup}>
                <label>المقاس:</label>
                <div className={styles.sizes}>
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      className={selectedSize === size ? styles.selected : ''}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors.length > 0 && (
              <div className={styles.optionGroup}>
                <label>اللون:</label>
                <div className={styles.colors}>
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={selectedColor === color ? styles.selected : ''}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>
            )}

            <button 
              className={styles.addButton}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {product.inStock ? 'أضف إلى السلة' : 'نفذت الكمية'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
