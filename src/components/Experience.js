import "./Experience.css";
import React from 'react';

function Experience() {
  return (
    <div id='experience-page' className='page-wrap'>
      <h1>Experience</h1>
      <br />
	  <ul class="jobs">
	    <li class="job">
		  <h2>Data Processor</h2>
		  <h3>Brown Taxes, LLC - Wauconda, IL</h3>
		  <p>April 2023 - July 2023</p>
		  <ul class="job-details">
			<li>Process PDFs of client invoices for key information while building a usable audit schedule</li>
			<li>Developed potential company website redesign with JavaScript, HTML, and CSS</li>
		  </ul>
		</li>
        <br />
		<li class="job">
		  <h2>IT Support Specialist</h2>
		  <h3>Mainbridge Health Partners - Grayslake, IL</h3>
		  <p>July 2020 - March 2023</p>
		  <ul class="job-details">
			<li>Documented onboarding hardware requests from customer practice managers</li>
			<li>Setup and ship/dropship barcode scanners and DYMO printers to customer practices; work with
			  billing department to relay Purchase Orders</li>
			<li>Installed EX05 full-disk encryption software and administrative settings on company devices</li>
			<li>Log and troubleshoot problems for all hardware in the field, connecting with manufacturers as
			  higher importance needs arise</li>
			<li>Developed hardware usage manuals and videos for internal training and customer IT teams</li>
			<li>Monitored email domain encryption and multi-factor authentication for company services</li>
			<li>Performed preventative maintenance on hardware and biomedical pumps</li>
		  </ul>
		</li>
        <br />
		<li class="job">
		  <h2>Data Anylitics Internships</h2>
		  <h3>Relia-Source, LLC - Grayslake, IL</h3>
		  <p>Summer of 2018 and Summer of 2019</p>
		  <ul class="job-details">
			<li>Monitored inventory items on company web app; including updating items with discrepancies
			  and deleting duplicates using our modal of the app</li>
			<li>Developed a Python script to parse information from queries to <a href="https://www.ndclist.com">www.ndclist.com</a> into a formatted
			  Excel spreadsheet which can be uploaded to our item database</li>
			<li>Calculated and concisely relayed quarterly rebate fee information from an internal database to executive officers and client
			  financial offices</li>
		  </ul>
		</li>
	  </ul>
      <br />
    </div>
  );
}

export default Experience;