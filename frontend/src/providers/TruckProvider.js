import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { TruckContext } from '../context';

import {
  getProductAPI,
  getProductsAPI,
  getTrucksAPI,
  getTruckAPI,
} from '../utils';

const TruckProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const [trucks, setTrucks] = useState(null);
  const [truck, setTruck] = useState(null);
  const [apiTruckErr, setApiTruckErr] = useState(null);

  const getProducts = async () => {
    try {
      const apiData = await getProductsAPI();

      if (apiData.status === 'success') setProducts(apiData.data);

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiTruckErr(err.message);
    }
  };

  const getProduct = async (slug) => {
    try {
      const apiData = await getProductAPI(slug);

      if (apiData.status === 'success') setProduct(apiData.data);

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiTruckErr(err.message);
    }
  };

  const getTrucks = async () => {
    try {
      const apiData = await getTrucksAPI();

      if (apiData.status === 'success') setTrucks(apiData.data);

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiTruckErr(err.message);
    }
  };

  const getTruck = async (slug) => {
    try {
      const apiData = await getTruckAPI(slug);

      if (apiData.status === 'success') setTruck(apiData.data);

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiTruckErr(err.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setApiTruckErr(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [apiTruckErr]);

  return (
    <TruckContext.Provider
      value={{
        products,
        product,
        trucks,
        truck,
        getProducts,
        getProduct,
        getTrucks,
        getTruck,
        apiTruckErr,
      }}
    >
      {children}
    </TruckContext.Provider>
  );
};

TruckProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TruckProvider;
