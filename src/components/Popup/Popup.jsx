import { FiCheckCircle, FiX } from 'react-icons/fi';
import styles from './Popup.module.css';

const Popup = ({ product, onClose, onConfirm }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FiX />
        </button>

        <div className={styles.iconWrapper}>
          <FiCheckCircle className={styles.successIcon} />
        </div>

        <h2 className={styles.title}>تمت الإضافة إلى السلة!</h2>
        
        {product && (
          <div className={styles.productInfo}>
            <img src={product.images[0]} alt={product.nameAr} className={styles.productImage} />
            <div className={styles.productDetails}>
              <h3>{product.nameAr}</h3>
              <p className={styles.productName}>{product.name}</p>
              <p className={styles.price}>{product.price} {product.currency}</p>
            </div>
          </div>
        )}

        <div className={styles.actions}>
          <button className={styles.continueButton} onClick={onClose}>
            متابعة التسوق
          </button>
          <button className={styles.checkoutButton} onClick={onConfirm}>
            إتمام الطلب
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
