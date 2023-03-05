import { createFetch, CreateFetchOptions, UseFetchOptions } from '@vueuse/core';
import { objectToSearch } from '@/utils';

import { IFeatchParams } from './types';

class Fetch {
  instances;
  constructor(params: CreateFetchOptions) {
    const {
      baseUrl,
      combination = 'chain',
      fetchOptions = {
        mode: 'cors',
      },
      options,
    } = params;
    this.instances = createFetch({
      baseUrl,
      combination,
      options,
      fetchOptions,
    });
  }
  get({ url, params = {} }: IFeatchParams, featOptions: UseFetchOptions = {}) {
    return this.instances(`${url}${objectToSearch(params)}`, featOptions).json();
  }
  post({ url, data }: IFeatchParams, featOptions: UseFetchOptions = {}) {
    return this.instances(url, featOptions).post(data);
  }
  put({ url, data }: IFeatchParams, featOptions: UseFetchOptions = {}) {
    return this.instances(url, featOptions).put(data);
  }
  patch({ url, data }: IFeatchParams, featOptions: UseFetchOptions = {}) {
    return this.instances(url, featOptions).patch(data);
  }
  delete({ url }: IFeatchParams, featOptions: UseFetchOptions = {}) {
    return this.instances(url, featOptions).delete();
  }
}

export default Fetch;
