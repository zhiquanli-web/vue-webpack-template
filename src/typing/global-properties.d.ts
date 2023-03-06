import { Component } from 'vue';
import type { IFilters } from '@/filters';

declare module 'vue' {
  interface ComponentCustomProperties extends Component {
    $filters: IFilters;
  }
}
