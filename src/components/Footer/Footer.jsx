import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  const socialLinks = [
    { 
      icon: FaFacebookF, 
      url: 'https://www.facebook.com/profile.php?id=61577444073958', 
      label: 'Facebook', 
      color: '#1877f2' 
    },
    { 
      icon: FaInstagram, 
      url: 'https://www.instagram.com/alsater.tn/', 
      label: 'Instagram', 
      color: '#e4405f' 
    },
    { 
      icon: FaTiktok, 
      url: 'https://www.tiktok.com/@alsater.tn', 
      label: 'TikTok', 
      color: '#000000' 
    },
    { 
      icon: FaWhatsapp, 
      url: 'https://wa.me/21626704717', 
      label: 'WhatsApp', 
      color: '#25d366' 
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <div className={styles.logoWrapper}>
              <img src="/al-sater/logo.png" alt="الساتر" className={styles.logo} />
              <h3 className={styles.brandName}>الساتر</h3>
            </div>
            <p className={styles.tagline}>منتجات إسلامية عصرية للرجل المسلم</p>
            <p className={styles.description}>
              نقدم لكم أفضل المنتجات الإسلامية بجودة عالية وأسعار تنافسية، مع التزامنا بالقيم الإسلامية في كل ما نقدمه.
            </p>
          </div>

          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>روابط سريعة</h4>
            <ul className={styles.linksList}>
              <li><a href="/">الرئيسية</a></li>
              <li><a href="#products">المنتجات</a></li>
              <li><a href="#about">من نحن</a></li>
              <li><a href="#contact">تواصل معنا</a></li>
              <li><a href="#privacy">سياسة الخصوصية</a></li>
              <li><a href="#terms">الشروط والأحكام</a></li>
            </ul>
          </div>

          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>تواصل معنا</h4>
            <ul className={styles.contactList}>
              <li>
                <FiMail className={styles.contactIcon} />
                <a href="mailto:info@alsater.tn">info@alsater.tn</a>
              </li>
              <li>
                <FiPhone className={styles.contactIcon} />
                <a href="tel:+21626704717">+216 26 704 717</a>
              </li>
              <li>
                <FiMapPin className={styles.contactIcon} />
                <span>تونس العاصمة، تونس</span>
              </li>
            </ul>

            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>تابعنا على</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      style={{ '--social-color': social.color }}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            &copy; 2025 الساتر. جميع الحقوق محفوظة.
          </p>
          <p className={styles.madeWith}>
            صنع بـ ❤️ في تونس
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
