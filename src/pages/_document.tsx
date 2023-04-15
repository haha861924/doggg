import { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from 'constants/lib';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* Google tag (gtag.js) */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${GA_TRACKING_ID}');`,
        }}
      ></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
