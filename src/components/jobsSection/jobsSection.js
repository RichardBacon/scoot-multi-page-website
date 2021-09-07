import * as React from 'react';
import Job from '../job/job';
import * as styles from './jobsSection.module.css';

const JobsSection = () => {
  const jobs = [
    {
      id: 1,
      title: 'General Manager',
      location: 'Jakarta, Indonesia',
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      location: 'Yokohama, Japan',
    },
    {
      id: 3,
      title: 'Blog Content Copywriter',
      location: 'New York, United States',
    },
    {
      id: 4,
      title: 'Graphic Designer',
      location: 'New York, United States',
    },
    {
      id: 5,
      title: 'Fleet Supervisor',
      location: 'Jakarta, Indonesia',
    },
    {
      id: 6,
      title: 'UX Analyst',
      location: 'London, United Kingdom',
    },
  ];

  return (
    <section className={styles.jobsSection}>
      {jobs.map((job) => (
        <Job key={job.id} title={job.title} location={job.location} />
      ))}
    </section>
  );
};

export default JobsSection;
