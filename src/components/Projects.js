import "./Projects.css";
import React from 'react';
import option_chain_preview from './png/option_chain_preview.png';
import complex_plots_preview from './png/complex_plots_preview.png';
import pedalboard_gui_preview from './png/pedalboard_gui_preview.png';
import png_tkinter_preview from './png/png_tkinter_preview.png';

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
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/investing/tree/master/backtesting'>repo here</a>
			</li>
			<li>
			  <p>3D Equity Option Chain Visualizer; via webscraping in Python or using the <a target='_blank' rel='noopener noreferrer' href='https://documentation.tradier.com/brokerage-api/markets/get-options-chains'>Tradier API</a></p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/option-chain'>backend repo here</a> (python routines and prototype view in HTML/CSS/JavaScript)
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/option-chain-view'>frontend repo here</a> (main private view using React.js)
			  <br />
			  <img id='option-chain-preview' src={option_chain_preview} alt="" style={{ width: '600px', height: '300px' }} />
			</li>
			<li>
			  <p>Equity prediction model; uses python to fetch OHLC data from the AlphaVantage API, then detect features and train/test in go</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/go-ohlc'>repo here</a>
			  </li>
			<li>
			  <p>Foreign exchange trading bot with Python and the OANDA Trading API</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/oanda-fx-bot'>repo here</a>
			</li>
		  </ul>
		</li>
		<li>
		  <h2>Web Development</h2>
		  <ul className="projects-sublist">
		    <li>
			  <p>This website! A single-page portfolio hosted with Google Firebase, made with react.js</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/rmb-portfolio'>repo here</a>
			</li>
			<li>
			  <p>Blog Web App for re detach music; using react.js and Google Firebase</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/redetach-music'>repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://redetach-music.web.app'>visit re detach music</a>
			</li>
			<li>
			  <p>PERN Stack (postgresql, express.js, react.js, node.js) Full Stack Application with Server-Side Authentication via postgres</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/pern-client'>client repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/pern-server'>server repo here</a>
			</li>
			<li>
			  <p><u>Unused</u> webpage redesign for browntaxes.com; includes routing in vanilla javascript</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/brwn'>repo here</a>
			</li>
		  </ul>
		</li>
		<li>
		  <h2>Audio Engineering</h2>
		  <ul className="projects-sublist">
			<li>
			  <p>Creating VST3 plugins in C++ using Steinberg Media's VST3 SDK</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/vst-dev/tree/main/steinberg_sdk'>repo here</a>
			</li>
			<li>
			  <p>Creating VST plugins in C++ using the JUCE library</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/vst-dev/tree/main/juce'>repo here</a>
			</li>
			<li>
			  <p>Using Spotify's pedalboard library for Python to create FX chains/make audio clips for other uses;</p>
			  My source code is not live, check out Spotify's repo at <a target='_blank' rel='noopener noreferrer' href='https://github.com/spotify/pedalboard'>github.com/spotify/pedalboard</a>
			</li>
			<li>
			  <p>GUI Application to use Spotify's pedalboard python library; made with python tkinter</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/pedalboard-gui'>repo here</a>
			  <br /><br />
			  <img id='pedalboard-gui-preview' src={pedalboard_gui_preview} alt='' />
			</li>
            <li>
              <p>In-Browser single-oscillator synthesizer using TypeScript and the JavaScript Web Audio API (hosted with Vercel)</p>
              &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/web-synth'>repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://rmb-synth.vercel.app'>try the single-oscillator synth</a>
			  <br />
			  <p>In-Browser multi-synth using TypeScript and the JavaScript Web Audio API (hosted with Vercel)</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/web-multi-synth'>repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://web-multi-synth.vercel.app'>try the multi-oscillator synth</a>
			</li>
		  </ul>
		</li>
		<li>
		  <h2>Image Processing</h2>
		  <ul className="projects-sublist">
		    <li>
		      <p>'cool-pngs' .png generator site using HTML5 Canvas, javascript, and Vercel</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/cool-pngs'>repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://cool-pngs.vercel.app'>visit 'cool-pngs'</a>
		    </li>
			<li>
			  <p>'png-playground' .png generator and editor; created with react.js, and authentication + hosting using Google Firebase </p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://png-playground.web.app'>visit 'png-playground'</a>
			</li>
			<li>
			  <p>Generating .png images in go and python; some ideas came from ChatGPT</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/img-process'>repo here</a>
			</li>
			<li>
			  <p>GUI application via python tkinter to interface with go program to generate new .png files</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/png-tkiner'>repo here</a>
			  <br /><br />
			  <img id='png-tkinter-preview' src={png_tkinter_preview} alt='' />
			</li>
			<li>
			  <p>Generating music video visuals by creating .png files in go then combining them to create animations using <a target='_blank' rel='noopener noreferrer' href='https://ffmpeg.org/'>ffmpeg</a></p>
			  My code is not live as I'm using it to create proprietary videos for other creative projects, such as for <a target='_blank' rel='noopener noreferrer' href='https://redetach-music.web.app/instrumentals'>redetach music</a>
			</li>
		  </ul>
	    </li>
        <li>
		  <h2>Mathematics</h2>
		  <ul className="projects-sublist">
			<li>
			  <p>Simple neural network to train and test on logic gate truth tables. Inspired by Tsoding Daily's video <a target='_blank' rel='noopener noreferrer' href='https://youtu.be/PGSba51aRYU?feature=shared'>here</a></p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/logical-nn'>repo here</a>
			</li>
		    <li>
			  <p>Visualizing functions of complex variables using math.js and Plotly.js; hosted with Vercel</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/complex-plots'>repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://complex-plots.vercel.app/'>visit 'complex-plots'</a>
			  <br />
		  	  <img src={complex_plots_preview} alt='' style={{ width: '600px', height: '300px' }} /> 
			</li>
			<li>
			  <p>Benchmarking Microsoft's Q# Qubit simulator compared to a custom Qubit implementation and other Python random number generators.
			  <br />
			  More specifically, simulating coinflips and other two-outcome probabilistic events to "see which random is truly the most random" as batch size increases.
			  </p>
		      &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/qsharp'>repo here</a>
		    </li>
			<li>
			  <p>Implementing classes or structs to represent Qubits classically in various programming languages</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/qubits'>repo here</a>
			</li>
		  </ul>
	    </li>
	  </ul>
      <br />
    </div>
  );
}

export default Projects;