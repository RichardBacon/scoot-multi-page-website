import * as React from 'react';
import Feature from '../feature/feature';
import * as styles from './featuresSection.module.css';

const FeaturesSection = ({ features }) => {
  return (
    <section className={styles.featuresSection}>
      {features.map((feature) => (
        <Feature
          key={feature.id}
          heading={feature.heading}
          text={feature.text}
          image={feature.image}
          reverse={feature.id % 2 === 0}
        />
      ))}
    </section>
  );
};

export default FeaturesSection;
