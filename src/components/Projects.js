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
			  <p>3D Equity Option Chain Visualizer by Python BeautifulSoup webscraping (or using the <a target='_blank' rel='noopener noreferrer' href='https://documentation.tradier.com/brokerage-api/markets/get-options-chains'>Tradier API</a>)</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/option-chain'>backend repo here</a> (Python routines and prototype frontend view in HTML/CSS/JavaScript)
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/option-chain-view'>frontend repo here</a> (main private view using React.js)
			  <br />
			  <img id='option-chain-preview' src={option_chain_preview} alt="" style={{ width: '600px', height: '300px' }} />
			</li>
			<li>
			  <p>Equity prediction model; fetch OHLC data from the AlphaVantage API using Python, then detect features and train/test in Go</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/go-ohlc'>repo here</a>
			  </li>
			<li>
			  <p>Foreign exchange trading bot with Python and the OANDA Trading API</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/oanda-fx-bot'>repo here</a>
			</li>
			<li>
			  <p>3D Equity Option Chain Visualizer by Go Playwright webscraping and GNUplot
				<br />
				with a Google Firebase Firestore db to view the results in browser
			  </p>
			  private repo; refer to my Python 3D Equity Option Chain Visualizer repo above if interested
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
			  <p>PERN Stack (postgresql, express.js, react.js, node.js) / Full Stack Application with Server-Side Authentication using postgres</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/pern-client'>client repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/pern-server'>server repo here</a>
			</li>
			<li>
			  <p><u>Unused</u> webpage redesign for browntaxes.com; includes routing in vanilla javascript</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/brwn'>repo here</a>
			</li>
			<li>
			  <p>
				WebGL / WebGPU demos in pure JavaScript + WebPack; tested locally by serving with Go HTTP / HTTPS servers
				<br />
				(SSH used to generate keys)
			  </p>
			  &nbsp;- <a target="_blank" rel="noopener noreferrer" href="https://github.com/rolinmb/go-webgl">WebGL repo here</a>
			  <br />
			  &nbsp;- <a target="_blank" rel="noopener noreferrer" href="https://github.com/rolinmb/go-webgpu">WebGPU repo here</a>
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
			  <p>Using Spotify's pedalboard library for Python to create FX chains/make audio clips for other uses</p>
			  My source code is not live, check out Spotify's repo at <a target='_blank' rel='noopener noreferrer' href='https://github.com/spotify/pedalboard'>github.com/spotify/pedalboard</a>
			</li>
			<li>
			  <p>tkinter GUI Application to use Spotify's Pedalboard library (Python)</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/pedalboard-gui'>repo here</a>
			  <br /><br />
			  <img id='pedalboard-gui-preview' src={pedalboard_gui_preview} alt='' />
			</li>
            <li>
              <p>In-Browser single-oscillator synthesizer (TypeScript) and the JavaScript Web Audio API and hosted with Vercel</p>
              &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/web-synth'>repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://rmb-synth.vercel.app'>try the single-oscillator synth</a>
			  <br />
			  <p>In-Browser multi-synth (TypeScript) and the JavaScript Web Audio API; hosted with Vercel</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/web-multi-synth'>repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://web-multi-synth.vercel.app'>try the multi-oscillator synth</a>
			</li>
			<li>
			  <p>
				In-Browser Audio FX Editor via the WebAudio API and TypeScript; Users can upload .mp3 files and then preview the result with FX applied;
				<br />
				(work in progress / not yet hosted)
			  </p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/web-audio-fx'>repo here</a>
			</li>
		  </ul>
		</li>
		<li>
		  <h2>Image / Video Processing</h2>
		  <ul className="projects-sublist">
		    <li>
		      <p>'cool-pngs' .png generator site using HTML5 Canvas, vanilla JavaScript, and Vercel</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/cool-pngs'>repo here</a>
			  <br />
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://cool-pngs.vercel.app'>visit 'cool-pngs'</a>
		    </li>
			<li>
			  <p>'png-playground' .png generator and editor created with react.js; authentication and hosting using Google Firebase (taken offline) </p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/png-playground'>repo here</a>
			</li>
			<li>
			  <p>Generating .png images in Go and Python; some ideas came from ChatGPT</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/img-process'>repo here</a>
			</li>
			<li>
			  <p>GUI application via tkinter (Python) to interact with Go and generate new .png files</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/png-tkinter'>repo here</a>
			  <br /><br />
			  <img id='png-tkinter-preview' src={png_tkinter_preview} alt='' />
			</li>
			<li>
			  <p>Generating music video visuals by using <a target='_blank' rel='noopener noreferrer' href='https://ffmpeg.org/'>ffmpeg</a> to render .mp4 videos from .png images created by a Go script</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/vid-gen'> repo here</a>
			</li>
			<li>
			  <p>Go HTTP server to generate and respond with .png images created with data input from server POST request body</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/png-server'>repo here</a>
			</li>
			<li>
			  <p>Generating .png images in Rust similarly to how I've been doing in Go</p>
			  &nbsp;- <a target="_blank" rel="noopener noreferrer" href="https://github.com/rolinmb/rust-png">repo here</a>
			</li>
		  </ul>
	    </li>
        <li>
		  <h2>Mathematics</h2>
		  <ul className="projects-sublist">
			<li>
			  <p>Simple neural network in C to train and test on logic gate truth tables. Inspired by Tsoding Daily's video <a target='_blank' rel='noopener noreferrer' href='https://youtu.be/PGSba51aRYU?feature=shared'>here</a></p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/logical-nn'>repo here</a>
			</li>
			<li>
			  <p>Matrix data structure + matrix math functions in Go</p>
			  &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/go-matrix'>repo here</a>
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
			  <p>
				Benchmarking Microsoft's Q# Qubit simulator compared to a custom Qubit implementation and other Python random number generators.
			    <br />
			    More specifically, simulating coinflips and other two-outcome probabilistic events to "see which random is truly the most random" as batch size increases.
			  </p>
		      &nbsp;- <a target='_blank' rel='noopener noreferrer' href='https://github.com/rolinmb/qsharp'>repo here</a>
		    </li>
			<li>
			  <p>Implementing classes or structs to represent Qubits classically in several programming languages</p>
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