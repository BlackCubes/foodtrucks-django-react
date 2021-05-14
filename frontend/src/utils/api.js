import axios from 'axios';

// FOODTRUCK APIs

// -- authentication
export const loginAPI = async (data, headers) => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/users/login/`;

    const res = await axios({
      method: 'POST',
      url,
      data,
      headers,
    });

    if (res.status === 200) return { status: 'success', token: res.data };
  } catch (err) {
    console.log(err.message);
    return { status: 'error', message: err.message };
  }
};

export const logoutAPI = async (data, headers) => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/users/logout/`;
    const res = await axios({
      method: 'POST',
      url,
      data,
      headers,
    });
    if (res.status === 205) return { status: 'success' };
  } catch (err) {
    console.log(err);
    return { status: 'error', message: err.message };
  }
};

// -- users
export const getUserAPI = async (headers, uuid) => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/users/${uuid}/`;
    const res = await axios({
      method: 'GET',
      url,
      headers,
    });
    if (res.status === 200) return { status: 'success', data: res.data };
  } catch (err) {
    console.log(err);
    return { status: 'error', message: err.message };
  }
};

export const updatePasswordAPI = async (data, headers, uuid) => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/users/change_password/${uuid}/`;
    const res = await axios({
      method: 'PATCH',
      url,
      data,
      headers,
    });
    if (res.status === 200) return { status: 'success' };
  } catch (err) {
    console.log(err);
    return { status: 'error', message: err.message };
  }
};

export const updateProfileAPI = async (data, headers, uuid) => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/users/update_profile/${uuid}/`;
    const res = await axios({
      method: 'PATCH',
      url,
      data,
      headers,
    });
    if (res.status === 200) return { status: 'success', data: res.data };
  } catch (err) {
    console.log(err);
    return { status: 'error', message: err.message };
  }
};

export const updateImageAPI = async (data, headers) => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/users/update_image/`;
    const res = await axios({
      method: 'POST',
      url,
      data,
      headers,
    });
    if (res.status === 200) return { status: 'success', data: res.data };
  } catch (err) {
    console.log(err);
    return { status: 'error', message: err.message };
  }
};

// -- trucks
export const getTrucksAPI = async () => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/foodtrucks`;
    const res = await axios({
      method: 'GET',
      url,
    });
    if (res.status === 200) return { status: 'success', data: res.data };
  } catch (err) {
    console.log(err);
    return { status: 'error', message: err.message };
  }
};

export const getTruckAPI = async (slug) => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/foodtrucks/${slug}`;
    const res = await axios({
      method: 'GET',
      url,
    });
    if (res.status === 200) return { status: 'success', data: res.data };
  } catch (err) {
    console.log(err);
    return { status: 'error', message: err.message };
  }
};

// -- products
export const getProductsAPI = async () => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/products/`;
    const res = await axios({
      method: 'GET',
      url,
    });
    if (res.status === 200) return { status: 'success', data: res.data };
  } catch (err) {
    console.log(err);
    return { status: 'error', message: err.message };
  }
};

export const getProductAPI = async (slug) => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/products/${slug}`;
    const res = await axios({
      method: 'GET',
      url,
    });
    if (res.status === 200) return { status: 'success', data: res.data };
  } catch (err) {
    console.log(err);
    return { status: 'error', message: err.message };
  }
};

// -- socials
export const getEmojis = async () => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/socials/emojis/`;
    const res = await axios({
      method: 'GET',
      url,
    });

    if (res.status === 200) return { status: 'success', data: res.data };
  } catch (err) {
    console.log(err);
    return { status: 'error', message: err.message };
  }
};

export const getLikes = async () => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/socials/`;
    const res = await axios({
      method: 'GET',
      url,
    });

    if (res.status === 200) return { status: 'success', data: res.data };
  } catch (err) {
    console.log(err);
    return { status: 'error', message: err.message };
  }
};

export const createLike = async (data) => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/socials/`;
    const res = await axios({
      method: 'POST',
      url,
      data,
    });

    if (res.status === 201) return { status: 'success', data: res.data };
  } catch (err) {
    console.log(err);
    return { status: 'error', message: err.message };
  }
};
