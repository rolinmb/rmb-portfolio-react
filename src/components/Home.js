import "./Home.css";
import React from 'react';

function Home() {
  return (
    <div id='home-page' className='page-wrap'>
      <h1>Hello</h1>
      <br />
      <div className="home-content-wrap">
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
      <br />
      <div className='home-content-wrap'>
        <h4>Skills</h4>
        <ul id='skills-list'>
          <li><b><i>Operating Systems: </i></b>Windows, Linux, macOS, chromeOS</li>
		      <li><b><i>Programming Languages: </i></b>C, C++, C#, Go, Java, JavaScript, MATLAB, Python, SQL</li>
		      <li><b><i>Software Utilities: </i></b>GitHub, Elcipse IDE for Java, Microsoft Office/365, Visual Studio, PowerShell, Bash</li>
		      <li><b><i>University Coursework: </i></b>Algorithms Analysis, Calculus, Differential Equations, Linear Algebra, Numerical Analysis, Object-Oriented Programming, User Interfaces, Calculus of Complex Numbers</li>
        </ul>
      </div>
      <br />
    </div>
  );
}

export default Home;