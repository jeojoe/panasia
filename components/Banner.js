import jump from 'jump.js';

export default ({ text, subText, height = '560px', textAlign = 'center', hasButton }) => (
  <div>
    <div className="bg custom" style={{ height, textAlign }}>
      <div className="container banner-wrapper">
        <h1 className="main">{text}</h1>
        {subText && <p className="sub">{subText}</p>}
      </div>
      {hasButton &&
        <div
          className="arrow"
          onClick={() => jump('.jump-target', { offset: -70 })}
        >↓</div>
      }
    </div>
    <style jsx>{`
      .bg {
        background-image: url('/static/bg-1.jpg');
        background-size: cover;
        background-position: center;
        color: #fff;
      }
      .main {
        font-weight: 600;
        text-shadow: 0px 2px 3px rgba(0,0,0,1);
        font-family: Oswald;
        font-size: 60px;
        letter-spacing: 0.2rem;
      }
      .arrow {
        margin: 0 auto;
        font-size: 28px;
        color: #fff;
        -moz-animation: bounce 2s infinite;
        -webkit-animation: bounce 2s infinite;
        animation: bounce 2s infinite;
        cursor: pointer;
      }
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          -moz-transform: translateY(0);
          -ms-transform: translateY(0);
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        40% {
          -moz-transform: translateY(-18px);
          -ms-transform: translateY(-18px);
          -webkit-transform: translateY(-18px);
          transform: translateY(-18px);
        }
        60% {
          -moz-transform: translateY(-8px);
          -ms-transform: translateY(-8px);
          -webkit-transform: translateY(-8px);
          transform: translateY(-8px);
        }
      }
    `}</style>
  </div>
);
