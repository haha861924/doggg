import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router'
import '@/styles/globals.css';
import { Layout } from 'components';
import { pageView } from 'lib/ga';
import 'tailwindcss/tailwind.css';
import { MdxComponentsProvider } from 'context/mdxContext';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // Listen for page changes after a navigation or when the query changes
    router.events.on('routeChangeComplete', pageView)
    return () => {
      router.events.off('routeChangeComplete', pageView)
    }
  }, [router.events])

  return (
    <MdxComponentsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MdxComponentsProvider>
  );
}
