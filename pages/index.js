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
              <div className="img one" />
              <Link href="/products"><h5>REBAR COUPLERS</h5></Link>
              <p>A premium connecting joint for reinforcement bars that can overcome the disturbing limitations and problems you are facing.</p>
            </div>
            <div className="four columns">
              <div className="img two" />
              <Link href="/services"><h5>SERVICES</h5></Link>
              <p>We work hard to make sure that you succeed. We offer you on-site service, factory production and consultant service.</p>
            </div>
            <div className="four columns">
              <div className="img three" />
              <Link href="/machines"><h5>MACHINES</h5></Link>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
            </div>
          </div>
        </div>
        <div className="s-3">
          <div className="container">
            <div className="row">
              <div className="five columns">
                <h2>Our Clients</h2>
              </div>
              <div className="seven columns">
                <p>We are empowering success of our clients. (Wating final details)</p>
                <p>Central CNX</p>
                <p>อู่ซ่อมรถสายสีม่วง และสายสีน้ำเงิน</p>
                <p>Renaissance Sukhumvit 57</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container s-contact">
          <h1>Achieve Success Together</h1>
          <hr />
        </div>
        <Contact />
        <style jsx>{`
          .s-1 {
            padding: 60px 0;
          }
          .s-1 h3, .s-3 h2, .s-4 h3 {
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
            height: 400px;
            margin-bottom: 15px;
            text-align: center;
          }
          .s-2 .img {
            width: 100%;
            height: 200px;
            background-size: cover;
            background-position: center;
            border-radius: 5px;
          }
          .s-2 .img.one {
            background-image: url('/static/index/s2-1.jpg');
          }
          .s-2 .img.two {
            background-image: url('/static/index/s2-2.jpg');
          }
          .s-2 .img.three {
            background-image: url('/static/index/s2-3.jpg');
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
            background-image: url('/static/bg-client.jpg');
            background-size: cover;
            height: 500px;
            position: relative;
            padding: 30px 0;
            margin-bottom: 60px;
            color: #fff;
            text-shadow: 0px 2px 3px rgba(0,0,0,1);
          }
          .s-3 h2 {
            color: #fff;
            letter-spacing: 0.05rem;
            font-family: Oswald;
          }
          .s-3 .columns {
            padding-top: 50px
          }
          .s-contact h1 {
            text-align: center;
            font-family: Oswald;
          }
        `}</style>
        <style jsx global>
        {`
          @media (min-width: 1000px) {
            .bg {
              -webkit-transition: background-image 1s ease-in-out;
              -moz-transition: background-image 1s ease-in-out;
              -o-transition: background-image 1s ease-in-out;
              transition: background-image 1s ease-in-out;
              animation-name: bgFade;
              animation-timing-function: ease-in-out;
              animation-iteration-count: infinite;
              animation-duration: 20s;
            }
          }
          @keyframes bgFade {
            0% {
              background-image: url('/static/bg-1.jpg');
            }
            25% {
              background-image: url('/static/bg-2.jpg');
            }
            41% {
              background-image: url('/static/bg-2.jpg'); 
            }
            58% {
              background-image: url('/static/bg-3.jpg');
            }
            74% {
              background-image: url('/static/bg-3.jpg'); 
            }
            100% {
              background-image: url('/static/bg-1.jpg');
            }
          }
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
