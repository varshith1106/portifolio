import React from "react";


const Projects=()=>{
    return (
        <div className="project_page">
        <div className="cards">
        <div className="card" style={{width:'26em', height:'40em'}}>
  <img src="https://source.unsplash.com/200x200/?coding,computer" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">A Tech-Interview x Zoom Application</h4>
    <p className="card-text">Tech-Interview x Zoom application Create a meeting or join an existing meeting with all features provided in Zoom. 
    integrated IDE with real-time changes shown to all parties in the meeting. 
    Input, output, and most of the errors are handled and displayed in real-time. </p>
    <a href="https://github.com/varshith1106/" className="btn btn-primary project_btn">View</a>
  </div>
</div>
<div className="card" style={{width:'26em', height:'40em'}}>
  <img src="https://source.unsplash.com/200x200/?machine learning,computer" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">Prediction of Atrial Fibrillation (AFib) using ML with API implementation</h4>
    <p className="card-text">Atrial fibrillation is a major contributor to morbidity and medical costs. The most frequent sustained heart arrhythmia seen in clinical practice is (AFib). The heart flutters, beats erratically, or skips beats when suffering from atrial fibrillation. </p>
    <a href="https://github.com/varshith1106/" className="btn btn-primary project_btn">View</a>
  </div>
</div>
<div className="card" style={{width:'26em', height:'40em'}}>
  <img src="https://source.unsplash.com/200x200/?machine learning,artifical intelligence" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">Textutile </h4>
    <p className="card-text">Dealing with texts is a common day-to-day activity. Here you can find all the text utilities to help you perform your activity much faster. This includes tools to convert to upper and lowercase, text copy, clear text, remove spaces, text reverse and also the word and characters count.</p>
    <a href="https://varshith1106.github.io/Text-utile/" className="btn btn-primary project_btn">View</a>
  </div>
</div>
</div>
        </div>
    )
}


export default Projects;