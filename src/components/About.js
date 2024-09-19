import React, { useEffect, useState } from 'react';
import axios from 'axios';

function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios.get('/api/about')
      .then(response => setAbout(response.data))
      .catch(error => console.error('Error fetching about data:', error));
  }, []);

  if (!about) return <div className="container mx-auto p-4">Loading...</div>;

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">{about.bio}</p>
      <h3 className="text-2xl font-semibold">Skills</h3>
      <ul className="list-disc list-inside">
        {about.skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
}

export default About;
