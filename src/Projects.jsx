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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet risus eu nunc vulputate egestas. Vestibulum ante ipsum primis in faucibus orci luctus et.",
    image: "/images/ethereal.png",
    icons: ["react", "javascript", "css", "html"],
  },
  {
    title: "Project 3",
    description:
      "Praesent consequat, sapien id bibendum tincidunt, justo turpis condimentum justo, vel lacinia sapien lorem in nisi. Sed euismod lectus id ultricies pulvinar eget.",
    image: "/images/ethereal.png",
    icons: ["react", "javascript", "css", "html", "node", "postgresql", "sass"],
  },
];

const Projects = () => {
  return (
    <div>
      <h2 className="num" id="num-2">
        02.
      </h2>
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
