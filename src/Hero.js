import "./Hero.css"


const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1 id ="">I<span id ='apostrophe'>'</span>m Eliza Christopher<span id ='period'>.</span></h1>
        <p> I'm a forward-thinking Software Developer specializing in front-end technologies. Passionate about solving real-world problems, I seek continuous growth and collaboration. <span id='hero'>Let’s innovate together!</span></p>
      </div>      
      <img src="./images/stack-snippet1.png" alt="Eliza Christopher" />
    </div>
  );
}

export default Hero;