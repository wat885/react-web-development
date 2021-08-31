import React, { Component } from "react";
import Header from "../components/Header";
import Monitor from "../components/monitor/Monitor";
import Footer from "../components/Footer";
// import axios from 'axios'
import { connect } from "react-redux";
import { productsFetch } from "../actions";

class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = { products: "" };
  }

  componentDidMount() {
    // //1
    // //   this.setState({products : [
    // //     { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
    // //     { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
    // //     { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
    // //     { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
    // //     { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
    // //     { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
    // // ]})
    // // 2  fetch// เรียก data ผ่านapi   json server return ค่ากลับมา
    // // fetch("http://localhost:3001/products", { method: "GET" })
    // //   .then((res) => res.json())
    // //   .then((res) => {
    // //     // console.log('fetch',res);
    // //     this.setState({ products: res });
    // //   });
    // // 3 axios  //npm i -save axios
    // axios.get('http://localhost:3001/products').then(res =>{
    // //   console.log('axios',res.data)
    //   {this.setState({ products: res.data })}
    // })

    this.props.productsFetch();
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.props.products} />

        {/* <ProductItem productName="IPhone X" unitPrice="40500" />
        <ProductItem productName="iPad Pro 10.5" unitPrice="30500" />
        <ProductItem productName="iPad Mini 4 " unitPrice="19500" /> */}
        <Footer company=" " email=" " />
      </div>
    );
  }
}

// state ใน store
// function mapStateToProps(state) {
//   console.log(state);
//   return { products: state.products };
// }
function mapStateToProps({products}) {
  console.log(products);
  return { products };
}

// 1.fnc ที่นำค่าจาก store มาใส่ใน props component
export default connect(mapStateToProps, { productsFetch })(Home);
