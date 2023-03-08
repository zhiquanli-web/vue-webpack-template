import Fetch from '@/servies/fetch';
import localCache from '@/utils/localCache';

export const useMyFeatch = new Fetch({
  baseUrl: process.env.VUE_APP_BASE_URL,
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
    afterFetch(ctx) {
      // 这里做统一错误处理
      // const { code, message } = ctx.data;
      return ctx;
    },
    onFetchError(ctx) {
      // 错误请求
      console.log('errorCTX', ctx);
      return ctx;
    },
    timeout: 10000,
  },
});

export function useHandleApiRes(promise: PromiseLike<any>) {
  return promise.then((res) => {
    const { isFinished, data, abort, aborted, canAbort, statusCode, execute } = res;
    const { code, message, data: resData } = unref(data) || {};
    return {
      isFinished,
      code,
      message,
      data: resData,
      abort,
      aborted,
      canAbort,
      statusCode,
      execute,
    };
  });
}
