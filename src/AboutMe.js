import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="num">01.</h2>
      {/* <img src="./images/me12.png" alt="Eliza Christopher" /> */}
      <div
        id="img-container"
        style={{
          backgroundImage: `url(/images/me12.png)`,
        }}
      ></div>
      <div className="content">
        <h2>About Me</h2>
        <p>
          I'm a software developer with a passion for building innovative
          solutions that solve real-world problems. I specialize in front-end
          development and have experience working with HTML, CSS, and
          Javascript. I'm always looking for new challenges and opportunities to
          grow as a developer, and I'm excited to connect with other
          professionals in the tech industry. Let's create something amazing
          together!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
