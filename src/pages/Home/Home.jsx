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
      <div id="products">
        <ProductGrid products={products} title="منتجاتنا" />
      </div>
      <div id="about">
        <Testimonials />
      </div>
      <div id="contact">
        {/* You can add a contact section here */}
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Home;
