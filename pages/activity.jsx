import React, { Component, Fragment } from 'react';
import ClientNavigation from '../components/clientNavigation.component';
import Footer from '../components/footer.component';
import Head from 'next/head';

export default class Activity extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <Head>
                    <title>ゲストハウス愛徳 | 周辺案内</title>
                    <meta name="title" content="ゲストハウス愛徳 | 周辺案内" />
                </Head>
                <div className="main">
                    <ClientNavigation
                        animated={false}
                        page={'activity'} />
                    <h1 className="main-title text-center">周辺案内</h1>
                </div>
                <Footer />
            </Fragment>
        );
    }
}