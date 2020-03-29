import React from 'react';

import Layout from '../components/layout';
import Header from '../components/header';
import Logos from '../components/logos';
import Midsection from '../components/midsection';
import Testimonials from '../components/testimonials';

import imageHero from '../img/img_video.png';

export default () => (
  <Layout>
    <Header
      headline="Analyze your data with sentiment analysis"
      subHeadline="Train custom machine learning models to perform sentiment analysis. Do it in hours —not weeks— right inside the tools you already love."
      imageHero={imageHero}
    />
    <Logos />
    <Midsection />
    <Testimonials />
  </Layout>
);
