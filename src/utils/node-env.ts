export const isDev = () => {
  return process.env.NODE_ENV === 'development';
};

export const isProd = () => {
  return process.env.NODE_ENV === 'production';
};

export const getApiURL = () => {
  return process.env?.API_URL;
};

export const getCalcApiURL = () => {
  return process.env?.CALC_API_URL;
}

export const getHotjarScript = () => {
  return process.env?.HOTJAR_SCRIPT;
}
