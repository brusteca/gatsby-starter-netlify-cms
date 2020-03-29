import React from 'react';
import { Link } from 'gatsby'
import { FaGithub } from 'react-icons/fa';

import './style.scss';
import gatsbyLogo from '../img/gatsby-icon.png';
import logo from '../img/logo.svg';

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar is-transparent is-primary">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="/"
					>
						<img src={logo} height="50" alt="Logo-1" />
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">
								Solutions
							</a>
							<div className="navbar-dropdown is-boxed">
								<Link className="navbar-item" to="/for-support">
									For Support Teams
								</Link>
								<Link className="navbar-item" to="/for-product">
									For Product Teams
								</Link>
								<Link className="navbar-item" to="/for-developers">
									For Developers
								</Link>
							</div>
						</div>
						<Link className="navbar-item" to="/customers">
								Customers
						</Link>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">
									Product
							</a>
							<div className="navbar-dropdown is-boxed">
								<Link className="navbar-item" to="/how-it-works">
									How it Works
								</Link>
								<Link className="navbar-item" to="/text-classifiers">
									Text Classifiers
								</Link>
								<Link className="navbar-item" to="/text-extractors">
									Text Extractiors
								</Link>
								<Link className="navbar-item" to="/integrations">
									Integrations
								</Link>
								<Link className="navbar-item" to="/word-cloud">
									Word Cloud Tool
								</Link>
							</div>
						</div>
						<Link className="navbar-item" to="/pricing">
							Pricing
						</Link>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">
									Resources
							</a>
							<div className="navbar-dropdown is-boxed">
								<a className="navbar-item" to="/how-it-works">
									Help
								</a>
								<a className="navbar-item" to="monkeylearn.com/api">
									API Reference
								</a>
								<Link className="navbar-item" to="/blog">
									Blog
								</Link>
								<Link className="navbar-item" to="/sentiment-analysis">
									Sentiment Analysis
								</Link>
							</div>
						</div>
						<div className="navbar-item">
		          <a className="button is-rounded is-outlined is-inverted">
		            Log in
		          </a>
			      </div>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
