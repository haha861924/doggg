import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router'
import '@/styles/globals.css';
import { Layout } from 'components';
import { initGA, logPageView } from 'utils/analytics';
import 'tailwindcss/tailwind.css';
import { MdxComponentsProvider } from 'context/mdxContext';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    initGA()
    // `routeChangeComplete` won't run for the first page load unless the query string is
    // hydrated later on, so here we log a page view if this is the first render and
    // there's no query string
    !router.asPath.includes('?') && logPageView()
  }, [])

  useEffect(() => {
    // Listen for page changes after a navigation or when the query changes
    router.events.on('routeChangeComplete', logPageView)
    return () => {
      router.events.off('routeChangeComplete', logPageView)
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
