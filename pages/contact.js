import React, { Component } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Contact from '../components/Contact';

export default class Services extends Component {
  render() {
    return (
      <Layout>
        <Banner
          text="CONTACT US"
          subText="Achieve Success Together with Us."
          height="350px" paddingTop="140px"
          textAlign="left"
        />
        <Contact />
        <style jsx global>{`
          .banner-wrapper {
            padding-top: 150px;
          }
        `}</style>
      </Layout>
    );
  }
}
