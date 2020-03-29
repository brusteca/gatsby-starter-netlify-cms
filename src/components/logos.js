import React from 'react';
import {
	FaSass,
	FaHtml5,
	FaReact,
	FaMobileAlt,
	FaRocket,
	FaOsi
} from 'react-icons/fa';

import './style.scss';
import Emoji from './emoji';
import imageLogo from '../img/logo-clearbit-grey.svg';

const Logos = () => (
	<div>
		<section className="section is-small">
			<div className="container">
				<div className="columns">
					<div className="column is-2 is-offset-2 is-narrow">
						<article className="media">
							<figure className="image is-128x128">
								<img src={imageLogo}/>
							</figure>

						</article>
					</div>
					<div className="column is-2 is-narrow">
						<article className="media">
							<figure className="image is-128x128">
								<img src={imageLogo}/>
							</figure>

						</article>
					</div>
					<div className="column is-2 is-narrow">
						<article className="media">
							<figure className="image is-128x128">
								<img src={imageLogo}/>
							</figure>

						</article>
					</div>
					<div className="column is-2 is-narrow">
						<article className="media">
							<figure className="image is-128x128">
								<img src={imageLogo}/>
							</figure>

						</article>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Logos;
