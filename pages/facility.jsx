import React, { Component, Fragment } from 'react';
import ClientNavigation from '../components/clientNavigation.component';
import Footer from '../components/footer.component';
import Head from 'next/head';

export default class Facility extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <Head>
                    <title>ゲストハウス愛徳 | 館内施設</title>
                    <meta name="title" content="ゲストハウス愛徳 | 館内施設" />
                </Head>
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