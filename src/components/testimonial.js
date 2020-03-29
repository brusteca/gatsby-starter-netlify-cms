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
import imageTestimonial from '../img/img_testimonial.png';

const Testimonial = () => (
						<article
							className="media"
							style={{ maxWidth: '450px' }}
						>
							<figure
								className="image is-128x128"
								style={{ padding: '20px' }}
							>
								<img className="is-rounded" src={imageTestimonial}/>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Alex MacCaw</h1>
									<h2 className="title is-size-5">Co-Founder & CEO @ Clearbit</h2>
									<p className="subtitle is-size-5">
										“MonkeyLearn is an integral part of Clearbit - it’s saved countless hours.”
									</p>
								</div>
							</div>
						</article>
);

export default Testimonial;
