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
      <div className="contact">
        <div className="container">
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
