import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          style: {
            background: '#121318',
            border: '1px solid #0e8882',
            color: 'white'
          }
        }}
      />
    </>
  )
}

export default MyApp
