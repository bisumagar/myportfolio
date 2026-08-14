import { useEffect, useState } from 'react';
import { fetchProjects } from '../api/api.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <h2>Selected work</h2>
          <span className="count">{status === 'ready' ? `${projects.length} projects` : ''}</span>
        </div>

        {status === 'loading' && <p className="muted-note">Loading projects…</p>}
        {status === 'error' && (
          <p className="muted-note">
            Couldn't reach the API. Make sure the backend server is running on port 5007.
          </p>
        )}
        {status === 'ready' && projects.length === 0 && (
          <p className="muted-note">No projects yet — run <code>npm run seed</code> in the backend folder to add sample data.</p>
        )}

        <div className="projects">
          {projects.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
