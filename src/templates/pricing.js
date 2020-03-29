import React from 'react';

import Layout from '../components/layout';
import Header from '../components/header-simple';
import PricingPlan from '../components/pricing-plan';

export default () => (
  <Layout>
    <Header headline="Pricing & Plans"/>

    <div>
  		<section className="section">
  			<div className="container">
  				<div className="columns">
  					<div className="column is-one-third">
              <PricingPlan planName="Free"/>
  					</div>
  					<div className="column is-one-third">
  						<PricingPlan planName="Team"/>
  					</div>
  					<div className="column is-one-third">
  						<PricingPlan planName="Business"/>
  					</div>
  				</div>
  			</div>
  		</section>
  	</div>

  </Layout>
);
