import React from "react";

function About({image="https://via.placeholder.com/215"}) {
    return (
     <div className="About">
      <aside></aside>
       <img src={image} alt="blog logo" ></img>
       <p>{"About this blog"}</p>
       </div>
       
    );
  }
export default About;