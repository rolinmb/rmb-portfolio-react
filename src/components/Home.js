import "./Home.css";
import React from 'react';

function Home() {
  return (
    <div id='home-page' className='page-wrap'>
      <h1>Greetings!</h1>
      <div className="home-content-wrap">
        <h2>Education</h2>
        <ul id='education-list'>
          <li>
		        <h3>Bachelor of Science</h3>
		        <h3>Iowa State University - Ames, IA</h3>
		        <h4><i>Major: </i>Mathematics <i>Minor: </i>Computer Science</h4>
		        <p>Fall 2016 - Spring 2020</p>
		      </li>
        </ul>
      </div>
      <br />
      <p>Versatile IT Support Specialist with programming, logistics, and quality assurance experience; Audio Engineer and Instrumentalist.</p>
      <div className='home-content-wrap'>
        <h2>Skills</h2>
        <ul id='skills-list'>
          <li><b><i>Operating Systems: </i></b>Windows, Linux, macOS, chromeOS</li>
		      <li><b><i>Programming Languages: </i></b>Go, Python, C, C++, HTML/CSS, JavaScript/TypeScript, Rust, Java, C#, MATLAB, SQL (SQL Server, Postgres)</li>
		      <li><b><i>Software Utilities: </i></b>GitHub, Microsoft Office/365, Visual Studio, PowerShell, Bash, SSH, Google Firebase, Vercel, Elcipse IDE for Java</li>
		      <li><b><i>University Coursework: </i></b>Calculus, Differential Equations, Linear Algebra, Theory of Linear Algebra, Analysis of Real Numbers, Numerical Analysis, Algorithms Analysis, Object-Oriented Programming, User Interfaces, Calculus of Complex Numbers</li>
        </ul>
      </div>
      <br />
    </div>
  );
}

export default Home;