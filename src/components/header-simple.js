import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import imageHero from '../img/img_video.png';
import bulmaLogo from '../img/bulma-logo.png';
import Navbar from './navbar';

const Header = (props) => (
	<section className="hero is-small-with-navbar has-bg-img">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<div className="columns">
					<div className="column">
						<div className="content">
							<h1 className="is-size-1 has-text-white">
							{ props.headline }
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Header;
