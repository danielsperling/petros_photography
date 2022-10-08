import Layout from '../componets/Layout'
import '../styles/globals.css'
import '../styles/index.css'
// import "bootstrap/dist/css/bootstrap.min.css";


function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
