import React from "react";
import man_sit from './images/man_sit.png';
const About=()=>{
    return (
      
    <div className="about_page">
     <div className="row featurette">
        <div className="col-md-7 about">
          <h1><strong>About Me</strong></h1>
          <p>I'm a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness.
          Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code.
          A responsive design makes your website accessible to all users, regardless of their devices.</p>
        </div>
         <div className="col-md-5 about_img">
           <img src={man_sit}/>
         </div>
         <div className="col-md-4 skill">
         <h1><strong>Skills</strong></h1>
         <li>Python</li>
         <li>ReactJS (Intermediate)</li>
         <li>MYSQL</li>
         <li>PL/SQL (Intermediate)</li>
         </div>
         <div className="col-md-4 skill1">
            <li>Html</li>
            <li>Css</li>
            <li>Javascript (Intermediate)</li>
         </div>
     </div>
    </div>


    )
}


export default About;