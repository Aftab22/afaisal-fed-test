import React from 'react';
import { Link } from 'react-router-dom';
import TargetButton from '../Components/Buttons/TargetButton.component.jsx';
import './styles/Home.page.styles.css';

function HomePage() {
	return (
		<div>
			<section class="hero">
				<div class="hero-content-area">
					<h1>Welcome to FED-TEST Submission</h1>
					<h3>Thank you for the opportunity.</h3>
					<h3>The web-app has an about page with some additional details</h3>
					<Link to="/users">
						<TargetButton text="VIEW USERS" />
					</Link>
				</div>
			</section>
		</div>
	);
}

export default HomePage;
