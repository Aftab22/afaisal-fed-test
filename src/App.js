import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UsersPage from './pages/Users.page';
import HomePage from './pages/Home.page';
import AboutPage from './pages/About.page';
import Navbar from './Components/Navbar/Navbar.component.jsx';
import './App.css';

function App() {
	return (
		<main>
			<Navbar />
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/users" component={UsersPage} />
				<Route path="/about" component={AboutPage} />
			</Switch>
		</main>
	);
}

export default App;
