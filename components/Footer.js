import Link from 'next/prefetch';

export default () => (
  <div className="footer">
    <div className="bg-footer" />
    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="four columns">
            <p className="company">&#169; 2017 Panasia Progressive Technology</p>
            <p>100/29 Soi Sap Tawi, Sam Khok district, Pathum Thani, Thailand 12160</p>
            <p>Tel: (+66) 81-919-6432<br />Fax: (+66) 2-977-3131</p>
          </div>
          <div className="eight columns">
            <Link href="/"><a className="item">HOME</a></Link>
            <Link href="/why"><a className="item">WHY PPT</a></Link>
            <Link href="/products"><a className="item">PRODUCTS</a></Link>
            <Link href="/services"><a className="item">SERVICES</a></Link>
            <Link href="/projects"><a className="item">PROJECTS</a></Link>
            <Link href="/faq"><a className="item">FAQ</a></Link>
            <Link href="/contact"><a className="item">CONTACT</a></Link>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .footer {
        background-color: #000;
        height: 300px;
        position: relative;
      }
      .bg-footer {
        background-image: url('/static/bg-1.jpg');
        background-size: cover;
        background-position: bottom;
        height: 100%;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.6);
        padding: 30px 0;
        color: #fff;
        font-size: 13px;
      }
      .company {
        font-family: Oswald;
        font-size: 17px;
      }
      .item {
        font-family: Oswald;
        font-size: 17px;
        color: #fff;
        text-decoration: none;
        margin: 0 18px;
      }
      .item:hover {
        text-decoration: underline;
      }
      @media (max-width: 1200px) {
        .item {
          margin: 0 0 12px 100px;
          display: block;
        }
        .footer {
          height: 550px;
        }
      }
      @media (max-width: 550px) {
        .item {
          margin: 0 0 12px;
        }
      }
    `}</style>
  </div>
);
