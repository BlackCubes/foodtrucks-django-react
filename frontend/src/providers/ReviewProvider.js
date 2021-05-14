import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ReviewContext } from '../context';

import {
  createReviewAPI,
  deleteReviewAPI,
  headers,
  updateReviewAPI,
} from '../utils';

const ReviewProvider = ({ children }) => {
  const [productReviews, setProductReviews] = useState(null);
  const [userReviews, setUserReviews] = useState(null);
  const [apiReviewErr, setApiReviewErr] = useState(null);
  const [apiReviewSuccess, setApiReviewSuccess] = useState(null);

  const createReview = async (data) => {
    try {
      const currentAccessToken = localStorage.getItem('access_token') || null;

      const apiData = await createReviewAPI(data, headers(currentAccessToken));

      if (apiData.status === 'success')
        setProductReviews([...productReviews, apiData.data]);

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiReviewErr(err.message);
    }
  };

  const updateReview = async (data, uuid) => {
    try {
      const currentAccessToken = localStorage.getItem('access_token') || null;

      const apiData = await updateReviewAPI(
        data,
        headers(currentAccessToken),
        uuid
      );

      if (apiData.status === 'success')
        setUserReviews([...userReviews, apiData.data]);

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiReviewErr(err.message);
    }
  };

  const deleteReview = async (uuid) => {
    try {
      const currentAccessToken = localStorage.getItem('access_token') || null;

      const apiData = await deleteReviewAPI(headers(currentAccessToken), uuid);

      if (apiData.status === 'success') {
        setUserReviews(userReviews.filter((review) => review.uuid !== uuid));
        setProductReviews(
          productReviews.filter((review) => review.uuid !== uuid)
        );
        setApiReviewSuccess('Review deleted!');
      }

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiReviewErr(err.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setApiReviewErr(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [apiReviewErr]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setApiReviewSuccess(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [apiReviewSuccess]);

  return (
    <ReviewContext.Provider
      value={{
        productReviews,
        userReviews,
        createReview,
        updateReview,
        deleteReview,
        apiReviewErr,
        apiReviewSuccess,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

ReviewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReviewProvider;
