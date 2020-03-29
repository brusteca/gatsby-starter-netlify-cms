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

const Midsection = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaSass size="fa-2x" color="#d22780" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">For Support Teams</h1>
									<p className="subtitle is-size-5">
										Automate ticket tagging and routing to help your support team move from putting out fires to elevating the conversation.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaHtml5 size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">For Product & CX Teams</h1>
									<p className="subtitle is-size-5">
										Infuse your product roadmap with insights from customer conversations, product reviews, surveys, and NPS.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaReact size="fa-2x" color="#5e227f" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">For Developers</h1>
									<p className="subtitle is-size-5">
										Train custom text analysis models and integrate them into your stack with our powerful API, simple SDKs and docs.
									</p>
								</div>
							</div>
						</article>
					</div>

				</div>
			</div>
		</section>
	</div>
);

export default Midsection;
