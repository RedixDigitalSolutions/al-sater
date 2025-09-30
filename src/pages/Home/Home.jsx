import Hero from '../../components/Hero/Hero';
import TrustBadges from '../../components/TrustBadges/TrustBadges';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Testimonials from '../../components/Testimonials/Testimonials';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import products from '../../data/products';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <TrustBadges />
      <ProductGrid products={products} title="منتجاتنا" />
      <Testimonials />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
