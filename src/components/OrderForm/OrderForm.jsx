import { useState } from 'react';
import { FiUser, FiPhone, FiMail, FiMapPin, FiMessageSquare, FiX, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import styles from './OrderForm.module.css';

const OrderForm = ({ onClose }) => {
  const { cart, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^[0-9+\s-]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'رقم الهاتف غير صحيح';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'العنوان مطلوب';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare order message
    const orderDetails = cart.map(item => 
      `- ${item.nameAr} (${item.selectedSize || ''}) x${item.quantity} = ${item.price * item.quantity} DT`
    ).join('\n');

    const whatsappMessage = `
*طلب جديد من موقع الساتر*

*الاسم:* ${formData.name}
*الهاتف:* ${formData.phone}
${formData.email ? `*البريد:* ${formData.email}` : ''}
*العنوان:* ${formData.address}
${formData.message ? `*ملاحظات:* ${formData.message}` : ''}

*تفاصيل الطلب:*
${orderDetails}

*المجموع الكلي:* ${getCartTotal()} DT
    `.trim();

    const phoneNumber = '21626704717'; // Your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FiX />
        </button>

        <div className={styles.header}>
          <FiShoppingBag className={styles.headerIcon} />
          <h2 className={styles.title}>إتمام الطلب</h2>
          <p className={styles.subtitle}>املأ البيانات لإكمال طلبك</p>
        </div>

        <div className={styles.scrollableContent}>
          <div className={styles.orderSummary}>
            <h3>ملخص الطلب</h3>
            <div className={styles.items}>
              {cart.map((item, index) => (
                <div key={index} className={styles.summaryItem}>
                  <img src={item.images[0]} alt={item.nameAr} />
                  <div className={styles.itemInfo}>
                    <span>{item.nameAr}</span>
                    <small>{item.selectedSize} × {item.quantity}</small>
                  </div>
                  <span className={styles.itemPrice}>{item.price * item.quantity} DT</span>
                </div>
              ))}
            </div>
            <div className={styles.total}>
              <span>المجموع الكلي:</span>
              <span className={styles.totalAmount}>{getCartTotal()} DT</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">
                <FiUser /> الاسم الكامل <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="أدخل اسمك الكامل"
                className={errors.name ? styles.error : ''}
              />
              {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">
                <FiPhone /> رقم الهاتف <span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+216 XX XXX XXX"
                className={errors.phone ? styles.error : ''}
              />
              {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">
                <FiMail /> البريد الإلكتروني <span className={styles.optional}>(اختياري)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={errors.email ? styles.error : ''}
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="address">
                <FiMapPin /> العنوان <span className={styles.required}>*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="المدينة، الحي، الشارع، رقم المنزل..."
                rows="3"
                className={errors.address ? styles.error : ''}
              />
              {errors.address && <span className={styles.errorMessage}>{errors.address}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">
                <FiMessageSquare /> ملاحظات إضافية <span className={styles.optional}>(اختياري)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="أي ملاحظات أو طلبات خاصة..."
                rows="3"
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'جاري الإرسال...' : 'تأكيد الطلب عبر واتساب'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
