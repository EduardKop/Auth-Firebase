import '../styles/globals.css'
import { AppProps } from 'next/app';
import Header from "../components/Header";
import {ThemeProvider} from 'next-themes'
import store from '../store/store'
import {Provider} from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
      <Header />
      <ThemeProvider attribute="class">
      <Component  {...pageProps} />
      </ThemeProvider>
  </Provider>

  )
}

export default MyApp
