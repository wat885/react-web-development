import React, { Component } from "react";
import Layout from "../components/layout";
import axios from "axios";
import Link from "next/link";

export class index extends Component {
  static async getInitialProps() {
    // await รอให้ได้ข้อมูลก่อนแล้วค่อยทำงาน
    const res = await axios.get("http://localhost:3001/blogs");
    return { blogs: res.data };
  }

  rederBlogs = blogs =>{
    return(
      blogs.map(blog =>{
        return(
          <div key={blog.id} className="col-6">
            <img src={blog.thumbnail} className="img-fluid" />
            <h4 className="mt-3">
              <Link href={'/blog/detail?id=' + blog.id }>
            
                
                
                {blog.subject}
              </Link>
            </h4>
            <hr/>
            <p className='text-justify'>{blog.intro}</p>

          </div>
        )
      })
    )
  }

  render() {
    // console.log(this.props.blogs);
    return <Layout>
      <div className='container'>
        <div className='row'>
          {this.rederBlogs(this.props.blogs)}
        </div>
      </div>

    </Layout>;
  }
}

export default index;
