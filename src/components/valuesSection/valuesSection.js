import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Value from '../value/value';
import * as styles from './valuesSection.module.css';

const ValuesSection = () => {
  const values = [
    {
      id: 1,
      heading: 'Our tech',
      text: 'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!',
      image: (
        <StaticImage
          src="../../assets/images/our-tech.jpg"
          alt="A closeup of a hand holding a mobile phone"
        />
      ),
    },
    {
      id: 2,
      heading: 'Our integrity',
      text: 'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.',
      image: (
        <StaticImage
          src="../../assets/images/our-integrity.jpg"
          alt="An aerial view of a person riding a yellow scooter on a road"
        />
      ),
    },
    {
      id: 3,
      heading: 'Our community',
      text: 'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.',
      image: (
        <StaticImage
          src="../../assets/images/our-community.jpg"
          alt="A group of people going about their day in an urban setting"
        />
      ),
    },
  ];

  return (
    <section className={styles.valuesSection}>
      <h2 className={styles.heading}>Our values</h2>

      <div className={styles.valuesWrapper}>
        {values.map((value, index) => (
          <Value
            key={value.id}
            number={String(index + 1).padStart(2, '0')}
            heading={value.heading}
            text={value.text}
            image={value.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
