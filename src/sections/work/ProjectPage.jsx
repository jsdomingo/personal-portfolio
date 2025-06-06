import { useParams } from "react-router-dom";
import projects from "../work/projects"; // adjust path as needed

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{project.title}</h1>
      <a href="/#home" style={{ textDecoration: 'none', color: 'blue' }}>
        ← Back to Home
      </a>
      <img src={project.image} alt={project.title} style={{ width: "100%", maxWidth: "600px" }} />
      <p><strong>Category:</strong> {project.category}</p>
      <p>More information about this project coming soon!</p>
    </div>
  );
}
