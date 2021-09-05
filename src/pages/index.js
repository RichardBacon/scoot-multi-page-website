import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo/seo';
import Layout from '../components/layout/layout';
import HeroSection from '../components/heroSection/heroSection';
import StepsSection from '../components/stepsSection/stepsSection';
import FeaturesSection from '../components/featuresSection/featuresSection';

const HomePage = () => {
  const features = [
    {
      id: 1,
      heading: 'Easy to use riding telemetry',
      text: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
      image: (
        <StaticImage
          src="../assets/images/telemetry.jpg"
          alt="A young woman looking at a mobile phone"
        />
      ),
    },
    {
      id: 2,
      heading: 'Coming to a city near you',
      text: 'Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.',
      image: (
        <StaticImage
          src="../assets/images/near-you.jpg"
          alt="View looking down a busy city street with high rise builidings on either side"
        />
      ),
    },
    {
      id: 3,
      heading: 'Zero hassle payments',
      text: 'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.',
      image: (
        <StaticImage
          src="../assets/images/payments.jpg"
          alt="Close up of a man opening a wallet and taking out a bank note"
        />
      ),
    },
  ];

  return (
    <>
      <Seo />
      <Layout>
        <HeroSection />
        <StepsSection />
        <FeaturesSection features={features} />
      </Layout>
    </>
  );
};

export default HomePage;
