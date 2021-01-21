import '../styles/globals.css'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import Router from "next/router";
import 'semantic-ui-css/semantic.min.css';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeError', () => NProgress.done())
Router.events.on('routeChangeComplete', () => NProgress.done())


function MyApp({ Component, pageProps }) {
  return <div className="bg-gray-500 text-white" style={{minHeight: '100vh'}}>
    <div className="fixed top-0 left-0 w-full flex h-32 px-12" style={{alignItems:'center'}}>
      {/* LEFT */}
      <div>
        <div className="text-4xl">DISSHOP</div>
      </div>
      <div className="flex-grow"/>
    {/*  RIGHT*/}
    <div>
      RIGHT MENU
    </div>
    </div>
    <div className="w-full h-32"/>
    <Component {...pageProps} />
  </div>
}

export default MyApp
