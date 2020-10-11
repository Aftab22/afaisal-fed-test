import React from 'react';
import './styles/About.page.styles.css';

function AboutPage() {
	return (
		<div id="about_page_container">
			<ol>
				<li>I developed this web application in a very short time.</li>
				<li>I have also implemented Redux,Redux-Thunk and React-Router to have multi page behaviour.</li>
				<li>I am handling the request to random user api asynchronously using redux thunk.</li>
				<li>
					More Details about me -{' '}
					<a href="http://bit.ly/aftab_portfolio" target="blank">
						My Portfolio website
					</a>{' '}
				</li>
				<li>
					Please Reach our for any discussion <a href="mailto:aftab_faisal@outlook.com">aftab_faisal@outlook.com</a>
				</li>
			</ol>
			<br />
			Thank you for the opportunity.
		</div>
	);
}

export default AboutPage;
