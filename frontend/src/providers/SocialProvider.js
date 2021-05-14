import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { SocialContext } from '../context';

import { createLikeAPI, getEmojisAPI, getLikesAPI } from '../utils';

const SocialProvider = ({ children }) => {
  const [emojis, setEmojis] = useState(null);
  const [likes, setLikes] = useState(null);
  const [apiSocialErr, setApiSocialErr] = useState(null);

  const addToLike = (socials, newLike) => {
    const existingLike = socials.find((social) => social.uuid === newLike.uuid);
    if (existingLike)
      return likes.map((like) => (like.uuid === newLike.uuid ? newLike : like));

    return [...likes, newLike];
  };

  const getEmojis = async () => {
    try {
      const apiData = await getEmojisAPI();

      if (apiData.status === 'success') setEmojis(apiData.data);

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiSocialErr(err.message);
    }
  };

  const getLikes = async () => {
    try {
      const apiData = await getLikesAPI();

      if (apiData.status === 'success') setLikes(apiData.data);

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiSocialErr(err.message);
    }
  };

  const createLike = async (data) => {
    try {
      const apiData = await createLikeAPI(data);

      if (apiData.status === 'success')
        setLikes((socials) => addToLike(socials, apiData.data));
    } catch (err) {
      setApiSocialErr(err.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setApiSocialErr(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [apiSocialErr]);

  return (
    <SocialContext.Provider
      value={{ emojis, likes, getEmojis, getLikes, createLike, apiSocialErr }}
    >
      {children}
    </SocialContext.Provider>
  );
};

SocialProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SocialProvider;
