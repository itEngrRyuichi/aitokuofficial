import React, { Component, Fragment } from 'react';
import ClientNavigation from '../components/clientNavigation.component';
import Footer from '../components/footer.component';
import Head from 'next/head';

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
            <Head>
            <title>ゲストハウス愛徳 | 公式ホームページ</title>
            <link rel="icon" href="https://gaitoku.herokuapp.com/logolove.jpg" />
            <meta charSet="utf-8" />
            <meta name="google-site-verification" content="ym6_1XKOzOZ7W4q6QZ6n4GKT3iTM-S0yPcaF2v5zc0w" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="title" content="ゲストハウス愛徳 | 公式ホームページ" />
            <meta name="description" content="「ただいま」って言いたくなるあたたかい宿泊施設です。野沢温泉村、ゲストハウス愛徳で宿泊しませんか？ ゲレンデまで徒歩1分。スキーシーズンもグリーンシーズンも楽しもう！スキー、スノーボードは勿論、夏は涼しく自然の中でリモートワークも最適！" />
            <meta name="copyright" content="ゲストハウス愛徳"></meta>
              {/* OGP Tag  */}
              <meta property="og:title" content="ゲストハウス愛徳" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://gaitoku.herokuapp.com/" />
              <meta property="og:image" content="https://gaitoku.herokuapp.com/ogpics.jpg" />
              <meta property="og:site_name" content="ゲストハウス愛徳" />
              <meta property="og:description" content="「ただいま」って言いたくなるあたたかい宿泊施設。野沢温泉村、ゲストハウス愛徳で宿泊しませんか？ ゲレンデまで徒歩1分。スキースノボは勿論、夏は涼しく自然の中でリモートワークも最適！" />
            </Head>
            <div className="main">
              <ClientNavigation />
              <div className="row py-4 mx-0 top-wrapper">
                <div className="col-3">
                  <span className="d-flex justify-content-end pt-4">
                    <p className="main-script pl-auto">
                    <span className="orange">「ただいま」</span>って言いたくなる<br />
                    あたたかい宿泊施設です。<br />
                    野沢温泉村 <span className="brawn">ゲストハウス愛徳</span> で<br />
                    宿泊しませんか？
                    </p>
                  </span>
                </div>
                <div className="col-9">
                  <span className="blur"><img src="/images/main/home.jpg" alt="ゲストハウス愛徳" className="mainPic"/></span>
                </div>
              </div>
              <div className="pt-2 mx-0 about-wrapper">
                <h1 className="main-title text-center">どんなところ？</h1>
                  <p className="sub-script text-center">
                      <span className="sky">スキーシーズン</span>も<span className="green">グリーンシーズン</span>も<br />
                      どちらも楽しもう！<br />
                      <br />
                      <span className="big">冬</span>は<span className="sky">スキー、スノーボード</span>で遊べる<br />
                      ゲレンデまで<span className="bold">徒歩1分</span><br />
                      <br />
                      <span className="big">夏</span>は涼しく自然を感じながら...<br />
                      <br />
                      <span className="bold">コワーキングスペース</span>が近くに！<br />
                      <span className="green">リモートワーク</span>も<span className="green">ワーケーション</span>にも<br />
                      最適な環境です<br />
                      <br />
                      ここは<span className="brawn">温泉卵</span>と<span className="brawn">野沢菜</span>が名物<br />
                      <span className="bold">野沢温泉街</span>で<span className="bold">お土産</span>を買おう！<br />
                      <br />
                      疲れたら温泉に浸かって<br />
                      <span className="orange">身も心もあたためてね...</span>
                  </p>
              </div>
              <div className="row py-0 mx-0 picLink-wrapper">
                <div className="col-4 p-0">
                  <div className="img-wrapper">
                    <h1 className="link-title">お部屋を見る</h1>
                    <img src="/images/main/washitsu1.jpg" alt="roomLink"/>
                  </div>
                </div>
                <div className="col-4 p-0">
                <div className="img-wrapper">
                  <h1 className="link-title">周辺の情報</h1>
                  <img src="/images/main/washitsu1.jpg" alt="roomLink"/>
                </div>
                </div>
                <div className="col-4 p-0">
                <div className="img-wrapper">
                  <h1 className="link-title">アクセス</h1>
                  <img src="/images/main/washitsu1.jpg" alt="roomLink"/>
                </div>
                </div>
              </div>
            </div>
            <Footer />
          </Fragment>
      );
  }
}
