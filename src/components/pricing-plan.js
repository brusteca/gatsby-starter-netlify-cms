import React from 'react';
import './style.scss';

const PricingPlan = (props) => (
	<article className="media">
		<div className="media-content">
			<div className="content">
				<h1 className="title is-size-4 has-text-centered">{props.planName}</h1>
				<p className="subtitle is-size-5">
					Automate ticket tagging and routing to help your support team move from putting out fires to elevating the conversation.
				</p>
			</div>
		</div>
	</article>
);

export default PricingPlan;
