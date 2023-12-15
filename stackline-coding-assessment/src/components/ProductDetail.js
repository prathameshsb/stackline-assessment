// components/Dashboard.js
import React from "react";
import { connect } from "react-redux";
import { loadData } from "../actions";

const ProductDetail = ({ data, loadData }) => {
  const product = data[0];
  console.log(loadData);
  return (
    <div className="product-container">
      {product && (
        <div>
          <div className="product-image-content-holder">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <h2 className="title">{product.title}</h2>
            <div className="product-subtitle">
              <p>{product.subtitle}</p>
            </div>
          </div>
          <div>
            <ul className="tags">
              {product.tags.map((tag, index) => (
                <li className="tags-content" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { loadData })(ProductDetail);
