import React, { Component } from "react";
import { connect } from "react-redux"
import {productCreate, productUpdate, productFetch } from "../../actions/"
import Header from "../../components/Header";
import ProductForm from "../../components/product/ProductForm";
import Footer from "../../components/Footer";

class ProductEdit extends Component {

  componentDidUpdate(){
    if(this.props.match.params.id) {
      this.props.productFetch(this.props.match.params.id)


    }
  }

  render() {
    // match เก็บค่า url
    // เรียก formValues, products , productCreate, productUpdate
    const { formValues, match, products , productCreate, productUpdate } = this.props;
    // console.log(match);

    return (
      <div>
        <Header />
        <div className="container col-md-5">
          {match.path.indexOf("add") > 0 && (
            <div>
              <h2>เพิ่ม</h2>

              <ProductForm onProductSubmit={()=> productCreate(formValues)} />
            </div>
          )}
          {match.path.indexOf("edit") > 0 && (
            <div>
              <h2>แก้ไข</h2>

              <ProductForm  onProductSubmit={()=> productCreate(products.id,formValues)} />
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}


function mapStateToProps ({form, products}) {
  return { formValues :form.productForm ? form.productForm.value : null, products}
}

export default connect(mapStateToProps, {productCreate, productUpdate, productFetch}) (ProductEdit);
