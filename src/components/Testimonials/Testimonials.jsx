import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { BsQuote } from 'react-icons/bs';
import testimonialsData from '../../data/testimonials.json';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    }
  };

  const goToTestimonial = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(autoPlay);
  }, [currentIndex]);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>آراء عملائنا</h2>
          <p className={styles.subtitle}>ماذا يقول عملاؤنا السعداء عن منتجاتنا</p>
        </div>
        
        <div className={styles.testimonialWrapper}>
          <button 
            onClick={prevTestimonial} 
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            disabled={isAnimating}
          >
            <FiChevronRight />
          </button>

          <div className={`${styles.testimonialCard} ${isAnimating ? styles.animating : ''}`}>
            <BsQuote className={styles.quoteIcon} />
            
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name}
                  className={styles.avatar}
                />
                <div className={styles.imageGlow}></div>
              </div>
              <div className={styles.stars}>
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FiStar key={i} className={styles.starIcon} />
                ))}
              </div>
            </div>

            <div className={styles.contentSection}>
              <p className={styles.text}>{currentTestimonial.text}</p>
              
              <div className={styles.authorInfo}>
                <h4 className={styles.name}>{currentTestimonial.name}</h4>
                <p className={styles.role}>{currentTestimonial.role}</p>
                <p className={styles.location}>📍 {currentTestimonial.location}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={nextTestimonial} 
            className={`${styles.navButton} ${styles.navButtonRight}`}
            disabled={isAnimating}
          >
            <FiChevronLeft />
          </button>
        </div>

        <div className={styles.navigation}>
          <div className={styles.dots}>
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => goToTestimonial(index)}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
