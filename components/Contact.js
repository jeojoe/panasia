import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <div className="contact container">
        {/*<div dangerouslySetInnerHtml={{ __html: `<script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script><div style='overflow:hidden;height:440px;width:700px;'><div id='gmap_canvas' style='height:440px;width:700px;'></div><div><small><a href="http://embedgooglemaps.com">embed google maps</a></small></div><div><small><a href="https://privacypolicygenerator.info">privacy policy generator</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><script type='text/javascript'>function init_map(){var myOptions = {zoom:11,center:new google.maps.LatLng(34.14208845458396,-118.55589670820315),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(34.14208845458396,-118.55589670820315)});infowindow = new google.maps.InfoWindow({content:'<strong>Panasia Progressive Technology</strong><br>100/29 Sam Khok, Sam Khok District, Pathum Thani 12160<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>` }} />*/}
        <div className="row">
          <div className="six columns">
            <h3>Inquiries</h3>
            <p>For any inquiries, questions or commendations, please call: (+66)81-9196432 or fill out the following form</p>
            <input
              type="text" value={name} className="u-full-width"
              placeholder="Name"
              onChange={e => this.setState({ name: e.target.value })}
            />
            <input
              type="text" value={email} className="u-full-width"
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="text" value={subject} className="u-full-width"
              placeholder="Subject"
              onChange={e => this.setState({ subject: e.target.value })}
            />
            <textarea
              value={message} className="u-full-width"
              placeholder="Message"
              onChange={e => this.setState({ message: e.target.value })}
            />
            <button className="button-primary">Send</button>
          </div>
          <div className="six columns">
            <h5>Head Office</h5>
            <p>100/29 Soi Sap Tawi, Sam Khok district, Pathum Thani, Thailand 12160</p>
            <p>www.ppt-coupler.com<br />
            Tel: (+66)81-919-6432<br />
            Fax: (+66)2-977-3131
            </p>
            <h5>Employment</h5>
            <p>To apply for a job with PPT, please send a cover letter together with your C.V. to: info@ppt-coupler.com</p>
            <hr />
            <h5>Get a quote: (+66)81-919-6432</h5>
          </div>
        </div>
        <style jsx>{`
          .contact {
            padding: 30px 0 50px;
          }
          .button-primary {
            float: right;
          }
        `}
        </style>
      </div>
    );
  }
}
