import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      title: "Codecademy",
      content:
        "Started my coding journey with Codecademy, where I learned the basics of web development, including HTML, CSS, and JavaScript. This foundation set the stage for more advanced learning and practical application.",
    },
    {
      title: "Springboard Bootcamp",
      content:
        "Completed the Springboard Software Engineering Bootcamp, a rigorous program focused on full-stack development. I worked on numerous projects, including a full-stack application, where I honed my skills in React, Node.js, and databases.",
    },
    {
      title: "Freelance Developer",
      content:
        "After completing my bootcamp, I started working as a freelance developer. I have built and maintained websites and applications for various clients, focusing on delivering high-quality, responsive, and user-friendly solutions.",
    },
  ];

  return (
    <div className="experience">
      <h2 className="num" id="num-3">
        03.
      </h2>
      <div className="content">
        <h2>Experience</h2>
        <div className="experience-container">
          <div className="experience-titles">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-title ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {exp.title}
              </div>
            ))}
          </div>
          <div className="experience-content">
            <div className="experience-detail">
              <h3>{experiences[activeIndex].title}</h3>
              <p>{experiences[activeIndex].content}</p>
            </div>
          </div>
        </div>
      </div>
      <img src="./images/experience.png" alt="Experience" />
    </div>
  );
};

export default Experience;
