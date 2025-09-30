import { useEffect, useRef, useState } from 'react';
import styles from './ScrollReveal.module.css';

const ScrollReveal = ({ children, animation = 'fadeUp', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current; // Copy ref to variable
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Use copied variable
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.scrollReveal} ${isVisible ? styles.visible : ''} ${styles[animation]}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
