import axios from 'axios';

// FOODTRUCK API
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

export const updatePasswordAPI = async (data, headers, uuid) => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/users/update_password/${uuid}/`;
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
