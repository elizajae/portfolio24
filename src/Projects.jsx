import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    title: "Ethereal Botanicals",
    description:
      "Springboard Capstone Project: A full-stack e-commerce website for a fictional plant shop. Users can browse plants, checkout, view order history, and track orders.",
    image: "/images/ethereal.png",
    icons: ["react", "javascript", "css", "html", "node", "postgresql", "sass"],
  },
  {
    title: "Project 2",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    image: "/images/ethereal.png",
    icons: ["react", "javascript", "css", "html"],
  },
  {
    title: "Project 3",
    description:
      "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.",
    image: "/images/ethereal.png",
    icons: ["react", "javascript", "css", "html", "node", "postgresql", "sass"],
  },
];

const Projects = () => {
  return (
    <div>
      <h2 className="num">02.</h2>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, key) => (
          <ProjectCard key={key} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
