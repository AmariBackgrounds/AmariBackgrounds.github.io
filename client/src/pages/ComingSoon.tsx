import React from 'react';
import 'bulma';
import { Helmet } from 'react-helmet';
import TopNav from '../components/Navbar';
import Footer from '../components/Footer';

const ComingSoon = () => {
  return (
    <div>
      <Helmet>
        <title>Coming Soon | AmariBackgrounds</title>
      </Helmet>

      <TopNav />
      
      <div style={{ height: '100px' }} />

      <h1 className="is-1 title" style={{ textAlign: 'center' }}>Coming Soon!</h1>

      <p style={{ textAlign: 'center' }}>
        This feature is not yet released, stay tuned for updates
      </p>

      <div style={{ height: '100px' }} />

      <Footer />
    </div>
  )
};

export default ComingSoon;