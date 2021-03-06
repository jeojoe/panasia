import React, { Component } from 'react';
import jump from 'jump.js';
import c from 'classnames';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import ProductShowcase from '../components/products/ProductShowcase';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 'rebar', //rebar, machine
    };
  }
  changeProduct = (product) => {
    this.setState({ product });
  }
  render() {
    const { product } = this.state;
    return (
      <Layout>
        <Banner
          text="OUR PRODUCTS"
          subText="Not only that our products are strong and cost-effective but also user-friendly. Smooth engagement helps reduce unnecessary hard work."
          height="350px" paddingTop="140px"
        />
        <div className="container jump-target">
          {/*<p className="choose">please choose product types</p>*/}
          <div className="buttons">
            <div
              className={c('button-side', { selected: product === 'rebar' })}
              onClick={() =>
                this.setState({ product: 'rebar' }, () =>
                  jump('.jump-target'))
              }
            >
              REBAR COUPLERS
            </div>
            <div
              className={c('button-side', { selected: product === 'machine' })}
              onClick={() =>
                this.setState({ product: 'machine' }, () =>
                  jump('.jump-target'))
              }
            >
              MACHINES
            </div>
          </div>
          <ProductShowcase product={product} />
        </div>
        <style jsx>{`
          .choose {
            text-align: center;
          }
          .buttons {
            margin: 30px auto;
            width: 100%;
            max-width: 600px;
            height: 75px;
            border: 1px solid #ddd;
            overflow: hidden;
            border-radius: 10px;
          }
          .button-side {
            width: 50%;
            height: 100%;
            display: inline-block;
            verticle-align: top;
            color: #2c3e50;
            cursor: pointer;
            font-family: Oswald;
            text-align: center;
            font-size: 26px;
            padding: 15px 0 0;
          }
          .button-side:nth-child(1) {
            border-right: 1px solid #ddd;
          }
          .button-side:hover {
            background-color: #34495e;
            color: #fff;
          }
          .button-side.selected {
            background-color: #2c3e50;
            color: #fff;
          }
          @media (max-width: 550px) {
            .buttons {
              height: 60px;
            }
            .button-side {
              font-size: 18px;
            }
          }
        `}</style>
        <style jsx global>{`
          .bg.custom {
            background-image: url('/static/bg-3.jpg');
          }
          .banner-wrapper {
            padding-top: 150px;
          }
          @media (max-width: 720px) {
            .banner-wrapper {
              padding-top: 120px;
            }
          }
          @media (max-width: 489px) {
            .banner-wrapper {
              padding-top: 90px;
            }
          }
        `}</style>
      </Layout>
    );
  }
}
