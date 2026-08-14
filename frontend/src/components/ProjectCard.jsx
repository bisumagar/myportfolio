export default function ProjectCard({ project }) {
  const { title, description, tags = [], liveUrl, codeUrl } = project;

  return (
    <div className="card">
      <div className="card-top">
        <h3>{title}</h3>
        <div className="card-links">
          {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer">Live</a>}
          {codeUrl && <a href={codeUrl} target="_blank" rel="noreferrer">Code</a>}
        </div>
      </div>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
