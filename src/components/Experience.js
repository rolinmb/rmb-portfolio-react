import "./Experience.css";
import React from 'react';

function Experience() {
  return (
    <div id='experience-page' className='page-wrap'>
      <h1>Work Experience / History</h1>
      <br />
	  <ul class="jobs">
		<li>
		  <h2>Overnight Pricing Team Associate</h2>
		  <h3>Mariano's - Lake Zurich, IL</h3>
		  <p>Sept 2023 - Nov 2024</p>
		  <ul class="job-details">
			<li>Distribute price tags and signs on a weekly basis</li>
			<li>Assist management and vendors with display or signage requests</li>
			<li>Use Zebra devices and internal software to conduct tag or sign printing and replacing</li>
			<li>Help other departments/teams depending on workload/seasonality</li>
		  </ul>
		</li>
	    <li class="job">
		  <h2>Contracted Data Processor</h2>
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
		  <p>Summer 2018 and Summer 2019</p>
		  <ul class="job-details">
			<li>Monitored inventory items on company web app; including updating items with discrepancies
			  and deleting duplicates using our modal of the app</li>
			<li>Developed a Python script to parse information from queries to <a href="https://www.ndclist.com">www.ndclist.com</a> into a formatted
			  Excel spreadsheet which can be uploaded to our item database</li>
			<li>Calculated and concisely relayed quarterly rebate fee information from an internal database to executive officers and client
			  financial offices</li>
		  </ul>
		</li>
		<br />
		<li class="job">
		  <h2>Tutor</h2>
		  <h3>Iowa State University - Ames, IA</h3>
		  <p>Fall 2017 to Spring 2019</p>
		  <ul class="job-details">
			<li>Tutored Calculus I, III, as well as Intro to Computer Science (in Java) as taught at Iowa State University</li>
			<li>Conducted three to five tutoring sessions of five to seven students each week</li>
			<li>Utilized campus resources to reserve spaces for sessions</li>
		  </ul>
		</li>
		<li class="job">
		  <h2>Maintenance Staff</h2>
	      <h3>Barefoot Bay Family Aquatic Center - Mundelein, IL</h3>
		  <p>Summer 2017</p>
		  <ul class="job-details">
			<li>Conducted cleaning responsibilities throughout each shift, as well as park closing duties if working that occasion</li>
			<li>Test water pH and Chlorine levels at a reguluar schedule across various park locations throughout each shift</li>
			<li>Utilize park maintenance facilities in order to adjust park water pH and Chlorine levels given the need arise</li>
			<li>Contact Maintenance Management if a scenario arises beyond my experience or if I had any other questions</li>
		  </ul>
		</li>
		<br />
		<li class="job">
		  <h2>Lifeguard</h2>
		  <h3>Barefoot Bay Family Aquatic Center - Mundelein, IL</h3>
		  <p>Summer 2016</p>
		  <ul class="job-details">
			<li>Became certified in CPR and certified for lifeguarding of public pools</li>
			<li>Rotate watchpoints throughout the day with fellow lifeguards</li>
			<li>Utilize training to triage when a swimmer / person on land needs saving / medical assistance</li>
		  </ul>
		</li>
		<br />
		<li class="job">
		  <h2>Maintenance Staff</h2>
		  <h3>Midtown Athletic Club - Palatine, IL</h3>
		  <p>Summer 2015</p>
		  <ul class="job-details">
			<li>Conducted cleaning responsibilities throughout each shift, such as taking out trash or power-washing outdoor paths</li>
			<li>Reset clay tennis courts with special raking equipment every morning before club open</li>
			<li>Cleanup out of bounds tennis balls left by club members</li>
		  </ul>
		</li>
	  </ul>
      <br />
    </div>
  );
}

export default Experience;