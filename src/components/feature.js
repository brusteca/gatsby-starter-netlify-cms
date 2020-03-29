import React from 'react';

import './style.scss';

import imageHero from '../img/img_video.png';

const Feature = (props) => (
	<div>
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column">
						<div
							className="content"
							style={{ maxWidth: '580px' }}
						>
							<h1 className="is-size-2">
								{props.headline}
							</h1>
							<p className="subtitle is-size-5">
								{props.subHeadline}
							</p>
							<ul>
									<li><p>Save time by automatically tagging your customer feedback by topic, aspect, intent, sentiment and more.</p></li>
									<li><p>Help inform product decisions by analyzing your customers requests, opinions and issues.</p></li>
									<li><p>Draw from any source: reviews, chats, surveys, NPS comments and support tickets.</p></li>
							</ul>
							<div className="columns">
								<div className="column is-narrow">

								</div>
								<div className="column is-narrow">

								</div>
							</div>
						</div>
					</div>
					<div class="column">
						<img
							src={props.imageHero}
							alt="Logo-1"
							max-width="400px"
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Feature;
