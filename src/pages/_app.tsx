import '@/styles/globals.css';
import { Layout } from 'components';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { MdxComponentsProvider } from 'context/mdxContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MdxComponentsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MdxComponentsProvider>
  );
}
