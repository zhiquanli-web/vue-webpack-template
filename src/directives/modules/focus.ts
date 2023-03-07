import { IDrrective } from '..';

const focusDirective: IDrrective = {
  name: 'focus',
  directive: {
    mounted: (el: HTMLInputElement) => el.focus(),
  },
};

export default focusDirective;
