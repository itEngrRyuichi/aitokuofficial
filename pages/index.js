import React, { Component, Fragment } from 'react';
import Footer from '../components/footer.component';

export default class Home extends Component {
  constructor(props) {
      super(props);

      this.state = {
      }
  }
  componentDidMount() {
  }

  render() {
      return (
          <Fragment>
              <div className="main">
                  <h1>Home</h1>
              </div>
              <Footer />
          </Fragment>
      );
  }
}
