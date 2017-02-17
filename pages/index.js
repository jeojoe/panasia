import React, { Component } from 'react';
import Link from 'next/prefetch';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Contact from '../components/Contact';

export default class extends Component {
  render() {
    return (
      <Layout>
        <Banner
          text="LEADING IN REBAR COUPLING TECHNOLOGY"
          subText="Learn Our Competences"
          hasButton
        />
        <div className="s-1 container jump-target">
          <h3 className="head 1">20 Year of Experience and R&D</h3>
          <div className="line"></div>
          <p>"We are an expert in parallel-threaded mechanical coupler system with over 20 years of direct experience and continuous R&D. Combining soft cold forged technology with thread rolling process, we guarantee you with a perfectly stronger connection than the parent bars."</p>
        </div>
        <div className="s-2 container">
          <div className="row">
            <div className="four columns">
              <div className="img" />
              <Link href="/products"><h5>REBAR COUPLERS</h5></Link>
              <p>A premium connecting joint for reinforcement bars that can overcome the disturbing limitations and problems you are facing.</p>
            </div>
            <div className="four columns">
              <div className="img" />
              <Link href="/services"><h5>SERVICES</h5></Link>
              <p>We work hard to make sure that you succeed. We offer you on-site service, factory production and consultant service.</p>
            </div>
            <div className="four columns">
              <div className="img" />
              <Link href="/machines"><h5>MACHINES</h5></Link>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
            </div>
          </div>
        </div>
        <div className="s-3">
          <div className="container">
            <div className="row">
              <div className="five columns">
                <h3>Our Client</h3>
              </div>
              <div className="seven columns">(client list and works example)</div>
            </div>
          </div>
        </div>
        <Contact />
        <style jsx>{`
          .s-1 {
            padding: 60px 0;
          }
          .s-1 h3, .s-3 h3, .s-4 h3 {
            text-align: center;
            font-weight: 600;
            color: #2C3E50;
            margin-bottom: 30px;
          }
          .s-1 h3 {
            font-size: 42px;
            font-family: Oswald;
            font-size: 60px;
          }
          .s-1 p {
            text-align: center;
            font-style: italic;
            font-size: 16px;
            max-width: 700px;
            margin: 0 auto;
          }
          .s-1 .line {
            width: 30%;
            margin: 0 auto 30px;
            height: 1px;
            background-color: #ddd;
          }
          .s-2 {
            margin-bottom: 100px;
          }
          .s-2 .four {
            background-color: #eee;
            height: 400px;
            margin-bottom: 15px;
            text-align: center;
          }
          .s-2 .img {
            background-color: #ddd;
            width: 100%;
            height: 200px;
          }
          .s-2 h5 {
            margin: 20px 7% 5px;
            font-weight: 600;
            color: #2C3E50;
            text-decoration: none;
          }
          .s-2 p {
            margin: 0 7% 5px;
          }
          .s-3 {
            background-image: url('/static/bg-client.png');
            background-size: cover;
            height: 500px;
            position: relative;
            padding: 30px 0;
            margin-bottom: 60px;
          }
          .s-3 .container {
            background-color: rgba(255,255,255,0.9);
            height: 440px;
          }
          .s-3 .columns {
            padding-top: 50px
          }
        `}</style>
        <style jsx global>
          {`
            .s-2 a {
              color: #2C3E50;
              text-decoration: none;
            }
            .s-2 a:hover {
              text-decoration: underline;
            }  
          `}
        </style>
      </Layout>
    );
  }
}
