import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleArabic}>الساتر</span>
          <span className={styles.subtitle}>منتجات إسلامية عصرية</span>
        </h1>
        <p className={styles.description}>
          ساتر العورة المبتكر - راحة وستر في كل حركة
        </p>
        <a href="#products" className={styles.ctaButton}>
          تسوق الآن
        </a>
      </div>
      <div className={styles.bannerImage}>
        <img src="/banner.png" alt="Al-Sater Banner" />
      </div>
    </section>
  );
};

export default Hero;
