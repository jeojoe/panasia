import React, { Component } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default class Services extends Component {
  render() {
    return (
      <Layout>
        <Banner
          text="PROJECT REFERENCES"
          subText="Success stories of our clients."
          height="350px" paddingTop="140px"
          textAlign="left"
        />
        <div style={{ minHeight: '600px' }}>
          NO SERVICES HERE !
        </div>
      </Layout>
    );
  }
}
