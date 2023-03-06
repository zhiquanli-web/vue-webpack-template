import Fetch from '@/servies/fetch';
import localCache from '@/utils/localCache';

export const useMyFeatch = new Fetch({
  baseUrl: 'http://localhost:8080/',
  options: {
    beforeFetch({ options, cancel }) {
      const token = localCache.getCache('token');
      if (!token) {
        cancel();
      }
      options.headers = {
        ...options.headers,
        Authorization: token,
      };
      return { options };
    },
    onFetchError(ctx) {
      // 这里可以做错误处理
      console.log('errorCTX', ctx);
      return ctx;
    },
    timeout: 10000,
  },
});

export function useHandleApiRes(promise: PromiseLike<any>) {
  return promise.then((res) => {
    const { isFinished, data } = res;
    const { code, message, data: resData } = unref(data);
    return {
      isFinished,
      code,
      message,
      data: resData,
    };
  });
}
