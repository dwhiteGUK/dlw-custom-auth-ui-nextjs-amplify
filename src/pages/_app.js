import Amplify from 'aws-amplify'

import "tailwindcss/tailwind.css";
import config from '../aws-exports'

Amplify.configure({
  ...config,
  ssr: true,
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
