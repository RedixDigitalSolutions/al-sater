import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

const ProductGrid = ({ products, title }) => {
  return (
    <section className={styles.section} id="products">
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
