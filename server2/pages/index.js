import React, { Component } from "react";
import Layout from "../components/layout";
import axios from "axios";

export class index extends Component {
  static async getInitialProps() {
    // await รอให้ได้ข้อมูลก่อนแล้วค่อยทำงาน
    const res = await axios.get("http://localhost:3001/blogs");
    return { blogs: res.data };
  }

  render() {
    console.log(this.props.blogs);
    return <Layout>TEST</Layout>;
  }
}

export default index;
