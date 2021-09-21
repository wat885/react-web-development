import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export class Layout extends Component {
  render() {
    const { children, title='เฮลตี้ คาเฟ่ บล็อกเกอร์'} = this.props;
    return (
      <div>
        <Head>
            <title>{title}</title>

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          ></link>
          <link rel="stylesheet" href="static/css/style.css"></link>
        </Head>

        <Header />
        {children}

        <Footer />
      </div>
    );
  }
}

export default Layout;
