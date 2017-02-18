import React, { Component } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default class Services extends Component {
  render() {
    return (
      <Layout>
        <Banner
          text="FAQ" subText="Frequently Ask Questions"
          height="350px" paddingTop="140px"
        />
        <div className="container" style={{ minHeight: '600px' }}>
          Waiting for contents !
        </div>
        <style jsx global>{`
          .banner-wrapper {
            padding-top: 150px;
          }
        `}</style>
      </Layout>
    );
  }
}
