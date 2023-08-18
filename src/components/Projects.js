import "./Projects.css";
import React from 'react';
import option_chain_preview from './png/option_chain_preview.png';
import complex_plots_preview from './png/complex_plots_preview.png';

function Projects() {
  return (
    <div id='projects-page' className='page-wrap'>
      <h1>Projects</h1>
	  <ul className="projects-list">
	    <li>
		  <h2>Finance / Investing</h2>
		  <ul className="projects-sublist">
		    <li>
			  <p>Trading strategy backtesting using Python with the Pandas and Numpy libraries</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/investing/tree/master/backtesting">repo here</a>
			</li>
			<li>
			  <p>3D Equity Option Chain Visualizer; via webscraping in Python or using the <a target='_blank' rel='noopener noreferrer' href="https://documentation.tradier.com/brokerage-api/markets/get-options-chains">Tradier API</a></p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/option-chain">backend repo here</a> (python routines and prototype view in HTML/CSS/JavaScript)
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/option-chain-view">frontend repo here</a> (main private view using React.js)
			  <br />
			  <img id='option-chain-preview' src={option_chain_preview} alt="" style={{ width: '600px', height: '300px' }} />
			</li>
			<li>
			  <p>Equity prediction models using Python with the Keras and sklearn libraries</p>
			  &nbsp;- repo not yet uploaded, work in progress
			  </li>
			<li>
			  <p>Foreign exchange trading bot with Python and the OANDA Trading API</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/oanda-fx-bot">repo here</a>
			</li>
		  </ul>
		</li>
		<li>
		  <h2>Web Development</h2>
		  <ul className="projects-sublist">
		    <li>
			  <p>This website! A single-page portfolio hosted with Google Firebase, made with react.js</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/rmb-portfolio">repo here</a>
			</li>
			<li>
			  <p>Blog Web App for re detach music; using react.js and Google Firebase</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/redetach-music">repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://redetach-music.web.app">visit re detach music</a>
			</li>
			<li>
			  <p><u>Unused</u> webpage redesign for browntaxes.com; includes routing in vanilla javascript</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/brwn">repo here</a>
			</li>
		  </ul>
		</li>
		<li>
		  <h2>Audio Engineering</h2>
		  <ul className="projects-sublist">
			<li>
			  <p>Creating VST3 plugins in C++ using Steinberg Media's VST3 SDK</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/vst-dev/tree/main/steinberg_sdk">repo here</a>
			</li>
			<li>
			  <p>Creating VST plugins in C++ using the JUCE library</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/vst-dev/tree/main/juce">repo here</a>
			</li>
			<li>
			  <p>Using Spotify's pedalboard library for Python to create FX chains/make audio clips for other uses;</p>
			  &nbsp;- my source code is not live, check out Spotify's repo at <a target='_blank' rel='noopener noreferrer' href="https://github.com/spotify/pedalboard">github.com/spotify/pedalboard</a>
			</li>
            <li>
              <p>In-Browser single-oscillator synthesizer using TypeScript and the JavaScript Web Audio API (hosted with Vercel)</p>
              &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/web-synth'>repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://rmb-synth.vercel.app'>try the single-oscillator synth</a>
			  <br />
			  <p>In-Browser multi-synth using TypeScript and the JavaScript Web Audio API (hosted with Vercel)</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/web-multi-synth">repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://web-multi-synth.vercel.app'>try the multi-oscillator synth</a>
			</li>
		  </ul>
		</li>
		<li>
		  <h2>Image Processing</h2>
		  <ul className="projects-sublist">
		    <li>
			  <p>Creating image effects using Go standard libraries and Python + pillow library</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/img-process">repo here</a>
		    </li>
		    <li>
		      <p>'cool-pngs' .png generator site using HTML5 Canvas, javascript, and Vercel</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/cool-pngs">repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://cool-pngs.vercel.app">visit 'cool-pngs'</a>
		    </li>
		  </ul>
	    </li>
        <li>
		  <h2>Mathematics</h2>
		  <ul className="projects-sublist">
		    <li>
			  <p>Visualizing functions of complex variables using math.js and Plotly.js; hosted with Vercel</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/complex-plots">repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://complex-plots.vercel.app/">visit 'complex-plots'</a>
			  <br />
		  	  <img src={complex_plots_preview} alt="" style={{ width: '600px', height: '300px' }} /> 
			</li>
			<li>
			  <p>Benchmarking Microsoft's Q# Qubit simulator compared to a custom Qubit implementation and other Python random number generators.
			    More specifically, simulating coinflips and other two-outcome probabilistic events to "see which random is the most reputable" as batch size increases.
			  </p>
		      &nbsp;- <a target='_blank' rel='noopener noreferrer' href="https://github.com/rolinmb/qsharp">repo here</a>
		    </li>
		  </ul>
	    </li>
	  </ul>
      <br />
    </div>
  );
}

export default Projects;