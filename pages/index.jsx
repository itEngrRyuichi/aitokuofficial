import React, { Component, Fragment } from 'react';
import ClientNavigation from '../components/clientNavigation.component';
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
              <ClientNavigation />
              <div className="row py-4 mx-0 top-wrapper">
                <div className="col-3">
                  {/* <h1 className="main-title text-right">ゲストハウス愛徳<br /> 公式ホームページ</h1> */}
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
                      <span className="brawn">コワーキングスペース</span>が近くに！<br />
                      <br />
                      <span className="green">リモートワーク</span>も<span className="green">ワーケーション</span>にも<br />
                      最適な環境です<br />
                      <br />
                      ここは<span className="bold">温泉卵</span>と<span className="bold">野沢菜</span>が名物<br />
                      <span className="brawn">野沢温泉街</span>でお土産を買おう！<br />
                      <br />
                      疲れたら温泉に浸かって<br />
                      <span className="orange">身も心もあたためてね...</span>
                  </p>
              </div>
            </div>
            <Footer />
          </Fragment>
      );
  }
}
