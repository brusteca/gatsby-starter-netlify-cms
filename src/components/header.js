import React from 'react';
import { FaBeer } from 'react-icons/fa';

import './style.scss';

import imageHero from '../img/img_video.png';
import bulmaLogo from '../img/bulma-logo.png';
import Navbar from './navbar';

const Header = (props) => (
	<section className="hero is-medium-with-navbar has-bg-img">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<div className="columns">
					<div className="column">
						<div className="content">
							<h1 className="is-size-1 has-text-white">
							{ props.headline }
							</h1>
							<p className="subtitle has-text-white is-size-5">
							{ props.subHeadline }
							</p>
							<div className="columns">
								<div className="column is-narrow">
									<a className="button is-primary is-rounded is-uppercase is-bold is-medium">
										<span>Sign up Free</span>
									</a>
								</div>
								<div className="column is-narrow">
									<a className="button is-primary is-rounded is-outlined is-inverted is-medium">Schedule a Demo</a>
								</div>
							</div>
						</div>
					</div>
					<div class="column">
						<img src={ props.imageHero} alt="Logo-1" />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Header;
