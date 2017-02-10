export default ({ product }) => (
  <div>
    {product === 'rebar' &&
      <div className="rebar">
        <h5 className="head-text">" SUPERIOR SOFT COLD FORGED COUPLER SYSTEM. "</h5>
        <div className="product row">
          <div className="six columns">
            <h3>PPT COUPLER</h3>
            <p>A premium connecting joint for reinforcement bars that can overcome the disturbing limitations and problems you are facing.</p>
            <ul>
              <li>Available in various size starting from 12 diameter bars and customized sizes</li>
              <li>Available for on-site service and factory production</li>
            </ul>
            <button className="button-primary">ORDER NOW</button>
          </div>
          <div className="six columns">
            <div className="ppt product-pic" />
          </div>
        </div>
        <hr />
        <div className="product row">
          <div className="six columns">
            <h3>ABC COUPLER</h3>
            <p>The newest model invented to be super cost-effective and high in quality.</p>
            <ul>
              <li>Available in various size starting from 12 diameter bars and customized sizes</li>
              <li>Available for on-site service and factory production</li>
            </ul>
            <button className="button-primary">ORDER NOW</button>
          </div>
          <div className="six columns">
            <div className="abc product-pic" />
          </div>
        </div>
      </div>
    }
    {product === 'machine' &&
      <div className="machine">
        <h5 className="head-text">Our machines have been designed and created to serve at their maximum potential.</h5>
        <div className="product row">
          <div className="six columns">
            <h3>Super Soft Cold Forging Machine</h3>
            <div className="machine-1-1 product-pic" />
            <div className="machine-1-2 product-pic" />
            <button className="button-primary">ORDER NOW</button>
          </div>
          <div className="six columns">
            <h3>Reinforcement Thread Rolling Machine</h3>
            <div className="machine-2-1 machine product-pic" />
            <div className="machine-2-2 machine product-pic" />
            <button className="button-primary">ORDER NOW</button>
          </div>
        </div>
      </div>
    }
    <style jsx>{`
      .rebar, .machine {
        padding: 0 0 80px;
      }
      .head-text {
        margin: 50px 0;
        font-weight: 600;
        font-style: italic;
        text-align: center;
        font-family: Oswald;
      }
      .product h3 {
        font-family: Oswald;
      }
      .product-pic {
        border-radius: 8px;
        margin: 6px auto 0;
        width: 100%;
        height: 270px;
        background-size: cover;
        // background-color: #000;
        background-position: center;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.3);
      }
      .ppt.product-pic {
        background-image: url('/static/ppt_coupler.jpg'); 
      }
      .abc.product-pic {
        background-image: url('/static/abc_coupler.jpg'); 
      }
      .machine-1-1.product-pic {
        background-image: url('/static/machine_1_1.jpg'); 
        margin: 0 0 30px;
      }
      .machine-1-2.product-pic {
        background-image: url('/static/machine_1_2.jpg'); 
        margin: 0 0 30px;
      }
      .machine-2-1.product-pic {
        background-image: url('/static/machine_2_1.jpg'); 
        margin: 0 0 30px;
      }
      .machine-2-2.product-pic {
        background-image: url('/static/machine_2_2.jpg'); 
        margin: 0 0 30px;
      }
    `}</style>
  </div>
);
