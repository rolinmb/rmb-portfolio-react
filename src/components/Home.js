import "./Home.css";
import React, { useRef, useEffect } from 'react';

const TrippyCanvasHome = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let frame = 0;

    const render = () => {
      frame++;
      const { width, height } = canvas;

      // Set a solid white background
      ctx.fillStyle = 'white'; // Change background to white
      ctx.fillRect(0, 0, width, height);

      // Lissajous curve parameters
      const a = 5; // frequency in x direction
      const b = 3; // frequency in y direction
      const delta = (Math.PI / 2) * Math.sin(frame / 200); // phase shift that changes over time

      const scale = Math.min(width, height) / 3; // scaling factor for the curves
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.beginPath();
      for (let t = 0; t <= Math.PI * 2; t += 0.01) {
        const x = centerX + scale * Math.sin(a * t + delta);
        const y = centerY + scale * Math.sin(b * t);
        ctx.lineTo(x, y);
      }

      // Color based on frame
      ctx.strokeStyle = `hsl(${frame % 360}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.stroke();

      requestAnimationFrame(render);
    };

    render();

    // Cleanup on unmount
    return () => cancelAnimationFrame(render);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}


function Home() {
  return (
    <div id='home-page' className='page-wrap'>
      <TrippyCanvasHome />
      <h1>Hi</h1>
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
            <i><u>Strongest</u>: </i>Go, Python, JavaScript/TypeScript/HTML/CSS, Rust, C++, Java, C 
            <br />
            <i><u>Have Some Experience</u>: </i>C#,  SQL <i>(SQL Server, Postgres)</i>, MATLAB, Verilog
          </li>
		      <li><b><i>Software Utilities</i> :: </b>GitHub, Microsoft Office / 365, Visual Studio / VS Code, PowerShell, Bash, SSH, HTTPS, Google Firebase, Vercel, Altera Quartus Prime, Elcipse IDE for Java</li>
		      <li><b><i>University Coursework</i> :: </b>Calculus / Real Analysis, Differential Equations, Linear Algebra, Theory of Linear Algebra, Analysis of Real Numbers, Numerical Analysis, Algorithms Analysis, Object-Oriented Programming, Software Project Management, User Interfaces, Calculus of Complex Numbers, Digital Logic / Boolean Algebra</li>
        </ul>
      </div>
      <br />
    </div>
  );
}

export default Home;