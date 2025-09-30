import { FiTruck, FiShield, FiLock, FiRotateCcw } from 'react-icons/fi';
import badgesData from '../../data/badges.json';
import styles from './TrustBadges.module.css';

const iconMap = {
  FiTruck: FiTruck,
  FiShield: FiShield,
  FiLock: FiLock,
  FiRotateCcw: FiRotateCcw
};

const TrustBadges = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {badgesData.map((badge, index) => {
          const IconComponent = iconMap[badge.icon];
          return (
            <div 
              key={badge.id} 
              className={styles.badge}
              style={{ '--badge-color': badge.color, '--animation-delay': `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                <IconComponent className={styles.icon} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{badge.title}</h3>
                <p className={styles.description}>{badge.description}</p>
              </div>
              <div className={styles.shine}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBadges;
