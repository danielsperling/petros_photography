import Layout from '../components/Layout'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import '../styles/index.css'
import "../styles/about.css"
import "../styles/coming_soon.css"


function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp

