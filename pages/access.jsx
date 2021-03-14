import React, { Component, Fragment } from 'react';
import ClientNavigation from '../components/clientNavigation.component';
import Footer from '../components/footer.component';
import Head from 'next/head';

export default class Access extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <Head>
                    <title>ゲストハウス愛徳 | アクセス</title>
                    <meta name="title" content="ゲストハウス愛徳 | アクセス" />
                </Head>
                <div className="main">
                    <ClientNavigation
                        animated={false}
                        page={'access'} />
                    <h1 className="main-title text-center">アクセス</h1>
                </div>
                <Footer />
            </Fragment>
        );
    }
}