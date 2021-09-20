import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export class index extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></link>
          <link rel="stylesheet" href="static/css/style.css"></link>
        </Head>

        <Header />

        <Footer />
      </div>
    );
  }
}

export default index;
