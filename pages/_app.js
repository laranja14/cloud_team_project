import App from 'next/app'
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Footer from "../src/component/Footer.js"
import Top from "../src/component/Top.js"
import Gnb from "../src/component/Gnb.js"
import reducers from '../src/reducers'
import wrapper from '../src/store/configureStore'

class MyApp extends App {
  static getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {

    return {
      pageProps: {
        // Call page-level getInitialProps
        // DON'T FORGET TO PROVIDE STORE TO PAGE
        ...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname,
      },
    };
  });

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <div style={{ backgroundColor: "#F9F9F9" }}>
          <Top />
          <Gnb />
          <Component {...pageProps} />
          <Footer />
        </div >
      </>
    );
  }
}

// function MyApp({ Component, pageProps }) {
//   return (
//     <div style={{ backgroundColor: "#F9F9F9" }}>
//       <Top />
//       <Gnb />
//       <Component {...pageProps} />
//       <Footer />
//     </div >
//   )
// }
// export default MyApp
export default wrapper.withRedux(MyApp);
