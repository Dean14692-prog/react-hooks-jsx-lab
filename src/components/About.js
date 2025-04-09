import React from "react";
import { image } from "../data/data.js"; // Ensure this image variable points to a valid image file

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I enjoy building websites and learning JavaScript!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
