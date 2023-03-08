import { useCssVar } from '@vueuse/core';
import { TMaping } from '@/typing';

export type TCssVar = '--el-color-primary';

export interface ICssVar {
  '--el-color-primary'?: string;
}

export type TCssVarsRecord = TMaping<ICssVar>;

// 默认主题色
const elementCssVars: TCssVarsRecord = {
  '--el-color-primary': '#409eff',
};

export function useSwitchTheme(
  el: HTMLElement | Ref<any>,
  cssVar: TCssVarsRecord,
  defaultThemeCssVar: TCssVarsRecord = elementCssVars
) {
  const colors: Record<TCssVar | string, any> = {};
  Object.keys(cssVar).forEach((item) => {
    colors[item as TCssVar] = useCssVar(item, el);
  });
  const switchColor = () => {
    Object.keys(cssVar).forEach((item) => {
      colors[item as TCssVar].value =
        colors[item as TCssVar].value === defaultThemeCssVar[item as TCssVar]
          ? cssVar[item as TCssVar]
          : defaultThemeCssVar[item as TCssVar];
    });
  };
  return {
    switchColor,
  };
}
