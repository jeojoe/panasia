import React from 'react';
import Layout from '../components/Layout';
import HomeBanner from '../components/HomeBanner';

export default () => (
  <Layout>
    <HomeBanner
      text="WHY PPT COUPLER ?"
      subText="There are several ways to connect steel bars but using PPT coupler is one of the most suitable ways based on these following reasons."
      paddingTop="140px"
      height="350px"
      textAlign="left"
    />
    <div className="container">
      <div className="row reason">
        <div style={{ maxWidth: '800px' }}>
          <h1 className="head 1">INNOVATIVE TECHNOLOGY</h1>
          <div className="line-under-head"></div>
          <p>Both our couplers and threads are neatly designed by an expert who has been constantly researching and developing the technology for more than 20 years.</p>
          <ul>
            <li>Unlike others, our couplers are remarkably strong because they are made from special material and clever design.</li>
            <li>The combination of soft cold-forged technology and reinforced parallel thread-rolling process results in perfect quality threads for connection.</li>
            <li>Our process does not reduce cross-section area of a bar so it does not weaken bar strength.</li>
            <li>Our process does not excessively enlarge a bar so it does not upset a bar’s core, preventing undesirable cracks.</li>
            <li>Our process does not destroy strong hard surface of a bar nor creating sharp corners that are prone to crack like the infamous cutting thread technique.</li>
          </ul>
        </div>
        {/*<div className="six columns">
          
        </div>*/}
      </div>
      {/*<div className="reason">
        <h1 className="head 2">CERTIFICATE</h1>
      </div>*/}
      <div className="row reason">
        <div className="six columns">
          <h1 className="head 3">COMPETITIVE<br />PRICE</h1>
          <div className="line-under-head" />
          <p>Our prices are reasonable and affordable. Please contact us for quotation.</p>
        </div>
        <div className="six columns">
          <h1 className="head 4">EASY<br />APPLICATION</h1>
          <div className="line-under-head" />
          <p>Not only that our products are strong and cost-effective but also user-friendly. Smooth engagement helps reduce unnecessary hard work.</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 50px 0;
      }
      .reason {
        padding: 20px 0;
      }
      .line-under-head {
        width: 70%;
        height: 1px;
        background-color: #ddd;
        margin: 0 0 30px;
      }
      .head {
        font-weight: 600;
        color: #2c3e50;
        letter-spacing: 0.05rem;
        font-family: Oswald;
      }
    `}</style>
  </Layout>
);
