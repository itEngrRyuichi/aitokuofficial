import React, { Component, Fragment } from 'react';
import ClientNavigation from '../components/clientNavigation.component';
import Footer from '../components/footer.component';

export default class Facility extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <div className="main">
                    <ClientNavigation
                        animated={false}
                        page={'facility'} />
                    <h1 className="main-title text-center">お部屋の紹介</h1>
                </div>
                <Footer />
            </Fragment>
        );
    }
}