import React, { Component } from 'react';
import { Fragment } from 'react';

export default class Footer extends Component {
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
                {/* Desktop Tablet */}
                <div className="footer py-3 d-none d-sm-block" id="contact">
                    <img src="/images/brand.png" alt="BradImage" className="rounded mx-auto mt-3 mb-2 d-block" ref="BradImage" />
                    <div className="contact py-3">
                        <p className="text-center title pb-3" ref="contact1">Contact</p>
                        <p className="text-center number" ref="contact2"><small>tell:</small> (0269)85-2455</p>
                        <p className="text-center number" ref="contact2"><small>email:</small> niceguy@aitoku.com</p>
                    </div>
                    <div className="address py-3">
                        <p className="text-center title pb-3" ref="address1">Address</p>
                        <p className="text-center addnumber" ref="address2">〒389-2502</p>
                        <p className="text-center addstring" ref="address3">長野県下高井郡野沢温泉村大字豊郷6570</p>
                    </div>
                    <p className="text-center copyright pt-2">Copyright &copy; 2021 Aitoku-Inn. All Rights Reserved.</p>
                    <p className="text-center copyright pb-2">Website Created by Ryuichi Paul Egoshi</p>
                </div>
                {/* Mobile */}
                <div className="footer-mobile d-block d-sm-none">
                    <img src="/images/brandsmall.png" alt="BradSmallImage" className="rounded mx-auto d-block" ref="BradSmallImage" />
                    <div className="contact py-2">
                        <p className="text-left title pb-2" ref="contact11">Contact</p>
                        <p className="text-left number" ref="contact12"><small>tell:</small> (0269)85-2455</p>
                    </div>
                    <div className="address py-2">
                        <p className="text-left title pb-2" ref="address11">Address</p>
                        <p className="text-left addnumber" ref="address12">〒389-2502</p>
                        <p className="text-left addstring" ref="address13">長野県下高井郡野沢温泉村大字豊郷6570</p>
                    </div>
                    <p className="text-center copyright pt-4">Copyright &copy; 2021 Aitoku-Inn. All Rights Reserved.</p>
                    <p className="text-center copyright pb-4">Website Created by Ryuichi Paul Egoshi</p>
                </div>
            </Fragment>
        );
    }
}