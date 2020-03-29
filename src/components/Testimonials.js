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
import Testimonial from './testimonial';

const Testimonials = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="columns is-multiline">
					<div className="column is-half">
						<Testimonial/>
					</div>
					<div className="column is-half">
						<Testimonial/>
					</div>
					<div className="column is-half">
						<Testimonial/>
					</div>
					<div className="column is-half">
						<Testimonial/>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Testimonials;
