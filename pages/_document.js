import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
          <title>ゲストハウス愛徳 | 公式ホームページ</title>
            <link rel="icon" href="https://gaitoku.herokuapp.com/logolove.jpg" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="title" content="ゲストハウス愛徳 | 公式ホームページ" />
            <meta name="description" content="「ただいま」って言いたくなるあたたかい宿泊施設です。野沢温泉村、ゲストハウス愛徳で宿泊しませんか？ ゲレンデまで徒歩1分。スキーシーズンもグリーンシーズンも楽しもう！スキー、スノーボードは勿論、夏は涼しく自然の中でリモートワークも最適！" />
            <meta name="copyright" content="ゲストハウス愛徳"></meta>
            <meta name="google-site-verification" content="ym6_1XKOzOZ7W4q6QZ6n4GKT3iTM-S0yPcaF2v5zc0w" />
            {/* OGP Tag  */}
            <meta property="og:title" content="ゲストハウス愛徳" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://gaitoku.herokuapp.com/" />
            <meta property="og:image" content="https://gaitoku.herokuapp.com/ogpics.jpg" />
            <meta property="og:site_name" content="ゲストハウス愛徳" />
            <meta property="og:description" content="「ただいま」って言いたくなるあたたかい宿泊施設。野沢温泉村、ゲストハウス愛徳で宿泊しませんか？ ゲレンデまで徒歩1分。スキースノボは勿論、夏は涼しく自然の中でリモートワークも最適！" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-842SVY7MNS" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-842SVY7MNS');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument