import * as React from 'react';
import FaqSection from '../faqSection/faqSection';
import * as styles from './faqsSection.module.css';

const FaqsSection = () => {
  const faqSections = [
    {
      id: 1,
      heading: 'How it works',
      faqs: [
        { id: 1, heading: 'How do I download the app?' },
        { id: 2, heading: 'How can I find a nearby Scoot?' },
        { id: 3, heading: 'Do I need a license to ride?' },
      ],
    },
    {
      id: 2,
      heading: 'Safe driving',
      faqs: [
        { id: 1, heading: 'Should I wear a helmet?' },
        { id: 2, heading: 'What are the rules and regulations?' },
        { id: 3, heading: 'What if I damage my Scoot?' },
      ],
    },
  ];

  return (
    <section className={styles.faqsSection}>
      <div className={styles.faqsSectionWrapper}>
        <h2 className={styles.heading}>FAQs</h2>

        <div className={styles.faqsWrapper}>
          {faqSections.map((faqSection) => (
            <FaqSection
              key={faqSection.id}
              heading={faqSection.heading}
              faqs={faqSection.faqs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
