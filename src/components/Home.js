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
          <li><b><i>Operating Systems / Hardware</i> :: </b>Windows, Linux <i>(Ubuntu, Mint)</i>, macOS, chromeOS, Cyclone 4 FPGA, Zebra Barcode Scanners</li>
		      <li><b><i>Programming Languages</i> :: </b><br />
            <i><u>Most Familiar (in order)</u>: </i>Go, Python, JavaScript / TypeScript, HTML, CSS, C++, Java, C 
            <br />
            <i><u>Have Some Experience</u>: </i>C#,  SQL <i>(SQL Server, Postgres)</i>, MATLAB, Verilog
          </li>
		      <li><b><i>Software Utilities</i> :: </b>GitHub, Microsoft Office / 365, Visual Studio, PowerShell, Bash, SSH, Google Firebase, Vercel, Altera Quartus Prime, Elcipse IDE for Java</li>
		      <li><b><i>University Coursework</i> :: </b>Calculus / Real Analysis, Differential Equations, Linear Algebra, Theory of Linear Algebra, Analysis of Real Numbers, Numerical Analysis, Algorithms Analysis, Object-Oriented Programming, Software Project Management, User Interfaces, Calculus of Complex Numbers, Digital Logic / Boolean Algebra</li>
        </ul>
      </div>
      <br />
    </div>
  );
}

export default Home;