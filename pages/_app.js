import React from 'react';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster
          toastOptions={{
            style: {
              color: '#24213d',
              backgroundColor: '#fdbc03',
            },
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
