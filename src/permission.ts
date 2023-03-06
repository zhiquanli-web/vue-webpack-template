import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false });

import router from '@/router';
import { localCache } from '@/utils';
import { tokenKey } from './common';

router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = localCache.getCache(tokenKey);
  const isToLogin = to.path === '/login';
  if (token) {
    if (isToLogin) {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    if (!isToLogin) {
      next({ path: '/login' });
    } else {
      next();
    }
  }
});
router.beforeEach(() => {
  NProgress.done();
});

export default router;
