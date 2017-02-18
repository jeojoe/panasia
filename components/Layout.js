import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/prefetch';
import c from 'classnames';
import Footer from './Footer';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    };
  }

  render() {
    const { children, title = 'Panasia Progressive Technology (PTT)' } = this.props;
    const { navOpen } = this.state;
    return (
      <div>
        <Head>
          <title>{ title }</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="/static/normalize.css" />
          <link rel="stylesheet" type="text/css" href="/static/skeleton.css" />
        </Head>
        <nav>
          <div className="logo">
            <Link href="/">
              <div className="logo-wrapper">
                <div className="company-logo">
                  <h1><strong>PPT</strong></h1>
                </div>
                <div className="company-name">
                  <h4><strong>PANASIA</strong> PROGRESSIVE TECHNOLOGY CO., LTD.</h4>
                </div>
              </div>
            </Link>
          </div>
          <button
            className="button menu-mobile-button"
            onClick={() => this.setState({ navOpen: !navOpen })}
          >
            {navOpen ? 'CLOSE' : 'MENU'}
          </button>
          <div className={c('menu', { active: navOpen })}>
            <div className="item">
              <Link href="/why"><a>WHY PPT</a></Link>
            </div>
            <div className="item">
              <Link href="/products"><a>PRODUCTS</a></Link>
            </div>
            <div className="item">
              <Link href="/services"><a>SERVICES</a></Link>
            </div>
            <div className="item">
              <Link href="/projects"><a>PROJECTS</a></Link>
            </div>
            <div className="item">
              <Link href="/faq"><a>FAQ</a></Link>
            </div>
            <div className="item button">
              <Link href="/contact"><a>CONTACT</a></Link>
            </div>
          </div>
        </nav>
        { children }
        <Footer />
        <style jsx>{`
          nav {
            box-sizing: border-box;
            padding: 5px 10% 4px;
            position: fixed;
            width: 100%;
            background-color: rgba(0,0,0,1);
            border-bottom: 1px solid #444;
            z-index: 999;
          }
          
          .logo-wrapper {
            cursor: pointer;
          }

          .logo {
            display: inline-block;
            verticle-align: middle;
            width: 360px;
            color: white;
            position: relative;
          }
          
          .company-logo {
            display: inline-block;
            verticle-align: middle;
          }

          .company-name {
            width: 250px;
            display: inline-block;
            verticle-align: middle;
            margin: 5px 0 0 15px;
          }

          .company-logo h1 {
            margin: 0;
            padding: 0;
          }

          .company-name h4 {
            font-size: 18px;
            margin: 0;
            padding: 0;
            letter-spacing: 0.1px;
          }

          .menu {
            display: inline-block;
            float: right;
          }

          .item {
            display: inline-block;
            verticle-align: middle;
            margin: 12px 15px;
            font-family: Oswald;
          }

          .item a {
            text-decoration: none;
            color: #fff;
          }

          .item a:hover {
            text-decoration: underline;
          }

          .item.button {
            border-color: #fff;
          }

          .menu-mobile-button {
            display: none;
            color: #fff;
            position: absolute;
            top: 20px;
            right: 15px;
          }

          @media (max-width: 1200px) {
            nav {
              padding: 5px 3% 4px;
            }
          }
          @media (max-width: 1000px) {
            nav {
              padding: 5px 10px 4px;
            }
            .logo {
              width: 150px;
            }
            .menu {
              display: none;
            }
            .menu-mobile-button {
              display: block;
            }
            .company-logo {
              display: none;
            }
            .company-name {
              margin: 10px 5px;
            }
            .menu.active {
              display: block;
              float: none;
            }
            .menu .item {
              display: block;
              text-align: center;
            }
          }
        `}</style>
      </div>
    );
  }
}

