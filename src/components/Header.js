import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<div>
		<header>
			<h1>Expensify</h1>
			<NavLink exact to="/" activeClassName="is-active">
				Dashboard{' '}
			</NavLink>
			<NavLink exact to="/create" activeClassName="is-active">
				Create expense{' '}
			</NavLink>
			<NavLink exact to="/help" activeClassName="is-active">
				Help{' '}
			</NavLink>
		</header>
	</div>
);

export default Header;
