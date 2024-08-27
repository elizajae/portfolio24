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
    title: "Spotify Clone",
    description:
      "A Spotify clone built with React, featuring a sidebar with playlists, a search bar, and user profile. It uses the Spotify Web API for real-time data and offers a sleek, modern UI.",
    image: "/images/spotify_clone.png",
    icons: ["react", "javascript", "css", "html", "firebase"],
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
