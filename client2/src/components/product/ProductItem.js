import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    // console.log("constructor|" + props.productName);
  }

  render() {
    const { productName, unitPrice, thumbnail } = this.props.product;
    return (
      <div className="col-md-3 col-sm-6">
        <img className="img-fluid img-thumbnail" src={thumbnail} />
        <h5 className="mt-2">{productName}</h5>
        <p className="text-right title">{unitPrice} THB</p>

        {this.props.onAddOrder && (
          <button
            className="btn btn-block btn-secondary title"
            onClick={() => this.props.onAddOrder(this.props.product)}
            // onClick={() => console.log(productName)}
            // value={unitPrice}
            // onClick={(e) => console.log(e.target.className)}
            // onClick={(e) => console.log(e.target.value)}
          >
            ซื้อ
          </button>
        )}

        {(this.props.onDelProduct || this.props.onEditProduct) && (
          <button className="btn  btn-info title col-5"
          onClick={() => this.props.onEditProduct(this.props.product)}
          >แก้ไข</button>
        )}

        {(this.props.onDelProduct || this.props.onEditProduct) && (
          <button
            className="btn  btn-danger title col-5 float-right"
            onClick={() => this.props.onDelProduct(this.props.product)}
          >
            ลบ
          </button>
        )}

        <hr />
      </div>
    );
  }
}

export default ProductItem;

// import React from "react";

// const ProductItem = (props) => {
//   const { productName, unitPrice } = props;
//   return (
//     <div>
//       <p>{productName}</p>
//       <p>{unitPrice}</p>
//     </div>
//   );
// };

// export default ProductItem;
