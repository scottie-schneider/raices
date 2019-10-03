// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps, ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}          
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWAvPfvYStM_QGVqo36vo3d2g3OOOEziY&libraries=places"></script>          
        </Head>
        <body className="sidebar-mini">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument