import React, { Component } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default class Services extends Component {
  render() {
    return (
      <Layout>
        <Banner
          text="OUR SERVICES"
          subText="{ Waiting for punch line Bam !}"
          height="350px" paddingTop="140px"
        />
        <div className="container" style={{ minHeight: '600px' }}>
          Waiting for contents !
        </div>
        <style jsx global>{`
          .banner-wrapper {
            padding-top: 150px;
          }
          @media (max-width: 407px) {
            .banner-wrapper {
              padding-top: 120px;
            }
          }
        `}</style>
      </Layout>
    );
  }
}
