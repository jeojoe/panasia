import Head from 'next/head';
import Link from 'next/prefetch';

export default ({ children, title = 'Panasia Progressive Technology (PTT)' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBG3FU2WDDPbHcVrSNc67YNkE6koltVh-g&callback=initMap" />
      <link rel="stylesheet" type="text/css" href="/static/normalize.css" />
      <link rel="stylesheet" type="text/css" href="/static/skeleton.css" />
    </Head>
    <nav>
      <div className="logo">
        <div className="company-logo">
          <h1><strong>PPT</strong></h1>
        </div>
        <div className="company-name">
          <h4><strong>PANASIA</strong> PROGRESSIVE TECHNOLOGY CO., LTD.</h4>
        </div>
      </div>
      <div className="menu">
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
          <Link href="/faq"><a>FAQ</a></Link>
        </div>
        <div className="item button">
          <Link href="/contact"><a>CONTACT</a></Link>
        </div>
      </div>
    </nav>
    { children }
    <footer>
      
    </footer>
    <style jsx>{`
      nav {
        box-sizing: border-box;
        padding: 5px 10%;
        position: fixed;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 999;
      }

      .logo {
        display: inline-block;
        verticle-align: middle;
        width: 360px;
        color: white;
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
        font-size: 20px;
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
    `}</style>
  </div>
);
