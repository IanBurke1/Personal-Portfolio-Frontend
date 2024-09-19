import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <div key={project.id} className="border rounded p-4 shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-2">{project.description}</p>
            <p className="mb-2"><strong>Technologies:</strong> {project.technologies}</p>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
