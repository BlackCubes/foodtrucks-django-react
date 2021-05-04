export default (accessToken) => {
  const headersConfig = {
    'Content-type': 'application/json',
  };

  if (accessToken) headersConfig.Authorization = `Bearer ${accessToken}`;

  return headersConfig;
};
