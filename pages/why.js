import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default () => (
  <Layout>
    <Banner
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
          <p>Both our couplers and threads are neatly designed by an expert who has been constantly researching and developing the technology for more than 20 years. Unlike others, our couplers are remarkably strong because they are made from special material and clever design.</p>
          <p>The combination of soft cold-forged technology and reinforced parallel thread-rolling process results in perfect quality threads for connection.</p>
          <div className="row">
            <div className="four columns feature">Our process does not reduce cross-section area of a bar so it does not weaken bar strength.</div>
            <div className="four columns feature">Our process does not excessively enlarge a bar so it does not upset a bar’s core, preventing undesirable cracks.</div>
            <div className="four columns feature">Our process does not destroy strong hard surface of a bar nor creating sharp corners that are prone to crack like the infamous cutting thread technique.</div>
          </div>
        </div>
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
      <div className="row founder">
        <div className="five columns">
          <img src="/static/why/founder.jpg" alt="Founder" />
        </div>
        <div className="seven columns">
          <label>Founder</label>
          <h2>Mr. Noppadol Temsinsook</h2>
          <div className="line-under-head" />
          <h5>"Upsetting parallel thread coupler expert"</h5>
          <p>1995 – Elaborating, experimenting and Mr.Noppadol Temsinsook contributed greatly to coupling technology, an innovative technique that surpassed the old and less effective overlapping technique.</p>
          <p>Inventing, elaborating and commercializing an innovative coupling method, Mr. Noppadol Temsinsook contributed at that time, to the important progress; coupling technology instead of overlapping.</p>
          <p>2009 - Dawn of a new path breaking era taking place and entering the market under the name of our new, dynamic company</p>
        </div>
      </div>
      <hr />
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
      .feature {
        padding: 10px 15px;
        border: 1px solid #2c3e50;
        border-radius: 8px;
        margin-bottom: 20px;     
      }
      .founder {
        padding: 30px 0;
      }
      .founder h2 {
        color: #2c3e50;
        letter-spacing: 0.05rem;
        font-family: Oswald;
      }
      .founder h6 {
        font-size: 20px;
      }
      .founder label {
        color: #999;
      }
      .founder img {
        width: 100%;
        border-radius: 8px;
        margin-bottom: 30px;
      }
      .founder h5 {
        font-style: italic;
      }
    `}</style>
    <style jsx global>{`
      .bg.custom {
        background-image: url('/static/bg-2.jpg');
      }
    `}</style>
  </Layout>
);
