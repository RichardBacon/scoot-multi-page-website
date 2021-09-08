import * as React from 'react';
import Faq from '../faq/faq';
import * as styles from './faqSection.module.css';

const FaqSection = ({ heading, faqs }) => {
  return (
    <div className={styles.faqSection}>
      <h3 className={styles.heading}>{heading}</h3>

      <div className={styles.faqsWrapper}>
        {faqs.map((faq) => (
          <Faq key={faq.id} heading={faq.heading} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
