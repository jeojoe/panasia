export default ({ text, subtext, height = '530px', paddingTop = '200px' }) => (
  <div>
    <div className="bg" style={{ height }}>
      <div className="container wrapper" style={{ paddingTop }}>
        <h1 className="main">{text}</h1>
        <p className="sub">{subtext}</p>
      </div>
    </div>
    <style jsx>{`
      .bg {
        background-image: url('/static/bg.png');
        background-size: cover;
        background-position: center;
        color: #fff;
        text-align: center;
      }
      .main {
        font-weight: 600;
        text-shadow: 0px 2px 3px rgba(0,0,0,1);
      }
    `}</style>
  </div>
);
