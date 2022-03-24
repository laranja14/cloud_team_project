import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Footer from "../src/component/Footer.js"
import Top from "../src/component/Top.js"
import Gnb from "../src/component/Gnb.js"
function MyApp({ Component, pageProps }) {
  return (
    < div>
      <Top />
      <Gnb />
      <Component {...pageProps} />
      <Footer />
    </div >
  )
}

export default MyApp
