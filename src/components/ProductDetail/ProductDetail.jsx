import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Popup from '../Popup/Popup';
import products from '../../data/products';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>المنتج غير موجود</h2>
        <button onClick={() => navigate('/')}>العودة للرئيسية</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart(product, selectedSize, selectedColor, quantity);
      setShowPopup(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.productDetail}>
          <div className={styles.imageSection}>
            <div className={styles.mainImage}>
              <img src={product.images[selectedImage]} alt={product.nameAr} />
            </div>
            <div className={styles.thumbnails}>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.nameAr} ${index + 1}`}
                  className={selectedImage === index ? styles.active : ''}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          <div className={styles.infoSection}>
            <h1 className={styles.productName}>{product.nameAr}</h1>
            <p className={styles.productNameEn}>{product.name}</p>

            <div className={styles.pricing}>
              <span className={styles.price}>{product.price} {product.currency}</span>
              {product.originalPrice && (
                <span className={styles.originalPrice}>{product.originalPrice} {product.currency}</span>
              )}
            </div>

            {!product.inStock && (
              <div className={styles.outOfStock}>نفذت الكمية</div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div className={styles.optionGroup}>
                <label>المقاس:</label>
                <div className={styles.sizes}>
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div className={styles.optionGroup}>
                <label>اللون:</label>
                <div className={styles.colors}>
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`${styles.colorButton} ${selectedColor === color ? styles.selected : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    ></button>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.optionGroup}>
              <label>الكمية:</label>
              <div className={styles.quantity}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <button 
              className={styles.addToCartButton}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {product.inStock ? 'أضف إلى السلة' : 'نفذت الكمية'}
            </button>

            {product.pricing && (
              <div className={styles.pricingInfo}>
                <h3>عروض خاصة:</h3>
                <ul>
                  <li>1 قطعة: {product.pricing.single} DT</li>
                  {product.pricing.double && (
                    <li>2 قطعتين: {product.pricing.double.price} DT (وفر {product.pricing.double.savings} DT)</li>
                  )}
                  {product.pricing.triple && (
                    <li>3 قطع: {product.pricing.triple.price} DT (وفر {product.pricing.triple.savings} DT)</li>
                  )}
                </ul>
              </div>
            )}

            {product.descriptionAr && (
              <div className={styles.description}>
                <h3>الوصف:</h3>
                <p>{product.descriptionAr}</p>
              </div>
            )}

            {product.features && (
              <div className={styles.features}>
                <h3>المميزات:</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.idealFor && (
              <div className={styles.idealFor}>
                <h3>مثالي لـ:</h3>
                <ul>
                  {product.idealFor.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {showPopup && (
        <Popup 
          product={product} 
          onClose={() => setShowPopup(false)}
          onConfirm={() => {
            setShowPopup(false);
            navigate('/');
          }}
        />
      )}
    </>
  );
};

export default ProductDetail;
