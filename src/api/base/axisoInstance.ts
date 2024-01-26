import axios from 'axios';


const IS_DEV = process.env.NODE_ENV === 'development';
const log = (message: string, path?: string): void => {
  if (IS_DEV) {
    console.log(`@@@@@@${message}${path ? " path: " + path : ''}`);
  }
}

export const authedAxios = axios.create({
  baseURL: IS_DEV ? undefined
    : process.env.NEXT_PUBLIC_V2_BACK_URL,
  
  withCredentials: true // 쿠키를 사용하기 위해 필요
});

export const plainAxios = axios.create({
  baseURL: IS_DEV ? undefined
    : process.env.NEXT_PUBLIC_V2_BACK_URL,
  
  withCredentials: true // 쿠키를 사용하기 위해 필요
});

// 응답 인터셉터 추가
authedAxios.interceptors.response.use(
  response => {
    log(`-------------------응답 인터셉터-------------------
      status:     ${JSON.stringify(response.status)}
      statusText: ${response.statusText}
      res.data:   ${JSON.stringify(response.data)}
      ${new Date()}
      -----------------------------------------------
    `);
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      log('토큰 만료로 인한 재요청', originalRequest.url);

      const refreshTokens = error.response.data?.token;

      if (refreshTokens) {
        log('access 토큰 리프레시 성공!!!!', originalRequest.url);
        return authedAxios(originalRequest);
      } else {
        alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
        window.location.href = '/signout';
      }

      log('access 토큰 리프레시 실패', originalRequest.url);
      return Promise.reject('Token refresh failed');
    }
    // 그 외 오류 처리
    // log('그 외 오류 처리', originalRequest.url);
    return Promise.reject(error);
  }
);

export default authedAxios;
