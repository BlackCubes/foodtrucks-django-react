import axios from 'axios';

// FOODTRUCK API
const loginAPI = async (data, headers) => {
  try {
    const url = `${process.env.REACT_APP_FOODTRUCKS_SERVER_URL}/users/login/`;

    const res = await axios({
      method: 'POST',
      url,
      data,
      headers,
    });

    if (res.status === 200) return res.data;
  } catch (err) {
    console.log(err.message);
  }
};

export default loginAPI;
