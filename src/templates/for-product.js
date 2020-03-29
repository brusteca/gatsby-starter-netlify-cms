import React from 'react';

import Layout from '../components/layout';
import Header from '../components/header';
import Feature from '../components/feature';
import Testimonials from '../components/testimonials';

import imageHero from '../img/poster_googleSheets_v1.png';
import imageFeature1 from '../img/graphic-1.png';
import imageFeature2 from '../img/graphic-2.png';
import imageFeature3 from '../img/graphic-3.png';

export default () => (
  <Layout>
    <Header
      headline="Use the tools you love to uncover the insights you need"
      subHeadline="Infuse your product roadmap with insights from customer conversations through support tickets, chat, product reviews, surveys, and NPS. Give voice to your customers."
      imageHero={imageHero}
    />
    <Feature
      headline="Analyze Feedback at Scale"
      subHeadline="MonkeyLearn helps by automatically tagging your feedback in minutes -- not weeks."
      imageHero={imageFeature1}
    />
    <Feature
      headline="Customized, Centralized and Accurate"
      subHeadline="MonkeyLearn helps you trust your data by keeping a consistent tagging criteria."
      imageHero={imageFeature2}
    />
    <Feature
      headline="Customized Reporting"
      subHeadline="Build custom reports and dashboards by connecting your favorite BI tools."
      imageHero={imageFeature3}
    />
    <Testimonials />
  </Layout>
);
