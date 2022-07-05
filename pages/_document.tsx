import Document, {
  DocumentContext, 
  Html, 
  Head, 
  Main, 
  NextScript 
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#637cf8"/ >
          <meta name="description" content="Andromeda's personal website."/>
          <meta name="keywords" content="andromeda tsukiakari balazs kovacs developer"/>
          <meta name="author" content="Balázs Kovács" />
          <link
            rel="shortcut icon"
            href="/site.png"
            type="image/png"
          />
          <link
            rel="apple-touch-icon"
            href="/site.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
