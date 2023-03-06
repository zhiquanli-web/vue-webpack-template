import type { App } from 'vue';
import { useDateFormat } from '@vueuse/core';
import type { MaybeComputedRef, DateLike, UseDateFormatOptions } from '@vueuse/core';

export interface IFilters {
  dateFormat: (
    date: MaybeComputedRef<DateLike>,
    formatStr?: MaybeComputedRef<string>,
    options?: UseDateFormatOptions
  ) => string;
}

export default function filters(app: App) {
  app.config.globalProperties.$filters = {
    dateFormat(
      date: MaybeComputedRef<DateLike>,
      formatStr: MaybeComputedRef<string> = 'YYYY-MM-DD hh:mm:ss',
      options?: UseDateFormatOptions
    ) {
      return useDateFormat(date, formatStr, options).value;
    },
  };
}
