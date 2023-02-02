import App from "next/app";
import React from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import "../src/assets/css/main.scss"
import favicon from '../src/assets/images/favicon.ico'
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
        <Provider store={reduxStore}>
          <HelmetProvider>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Med2Lab - Interactive Medical Education Platform</title>
                <meta name="description" content="An AI-Powered Interactive Platform for Improving Clinical Performance" />
                <link rel="icon" type="image/x-icon" href={favicon}/>
            </Helmet>
          </HelmetProvider>
          <Component {...pageProps} />
        </Provider>
    );
  }
}

export default withReduxStore(MyApp);
