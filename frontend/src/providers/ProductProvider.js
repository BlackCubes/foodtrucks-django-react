import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ProductContext } from '../context';

import { getProductAPI, getProductsAPI } from '../utils';

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const [apiProductErr, setApiProductErr] = useState(null);
  // const [apiProductSuccess, setApiProductSuccess] = useState(null);

  const getProducts = async () => {
    try {
      const apiData = await getProductsAPI();

      if (apiData.status === 'success') setProducts(apiData.data);

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiProductErr(err.message);
    }
  };

  const getProduct = async (slug) => {
    try {
      const apiData = await getProductAPI(slug);

      if (apiData.status === 'success') setProduct(apiData.data);

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiProductErr(err.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setApiProductErr(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [apiProductErr]);

  return (
    <ProductContext.Provider
      value={{ products, product, getProducts, getProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
