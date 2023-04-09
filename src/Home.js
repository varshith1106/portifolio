import React from "react";
import Typewriter from "typewriter-effect";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import whatsapp from "./images/whatsapp.png";
import github from "./images/github.png";
import man_stand from "./images/man_stand.png";

const Home = () => {
  return (
    <div className="row featurette home">
      <div className="col-md-8">
        <h1 className="headtext">
          Hello <span className="wave">👋 </span>
        </h1>
        <h1 className="nametext">I'm Varshith Thanuku</h1>
        <div className="subtitle">
          <h1 className="subtext">&nbsp;{" "}
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 5,
                strings: [
                  "Frontend Developer",
                  "ReactJS Developer",
                  "PL/SQL Developer",
                  "MYSQL Developer"
                ],
                wrapperClassName: "typed-wrapper",
              }}
            />
          </h1>
        </div>
        <a href='https://www.linkedin.com/in/thanuku-varshith-93a89b1a5/' target="_blank"  rel="noopener noreferrer">
        <button type="button" className="tallButton"><img src={linkedin}/></button>
        </a>
        <a href='https://api.whatsapp.com/send/?phone=%2B916301910596&text&type=phone_number&app_absent=0' target='_blank'  rel="noopener noreferrer">
        <button type="button" className="tallButton"><img src={whatsapp}/></button>
        </a>
        <a href="https://www.instagram.com/varshith_thanuku/" target="_blank" rel="noopener noreferrer">
        <button type="button" className="tallButton"><img src={instagram}/></button>
        </a>
        <a href='https://github.com/varshith1106/' target="_blank" rel="noopener noreferrer">
        <button type="button" className="tallButton"><img src={github}/></button>
        </a>
      </div>
      <div className="col-md-4">
        <img src={man_stand} className='man_image'/>
      </div>
    </div>
  );
};

export default Home;
