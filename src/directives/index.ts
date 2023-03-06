import type { App } from 'vue';
export interface IDrrective {
  name: string;
  directive: any;
}

export default function directives(app: App): void {
  const directiveList: Array<IDrrective> = [];
  const files = require.context(`./modules`, true, /\.ts$/);
  files.keys().forEach((key) => {
    const file = require(`./modules` + key.split('.')[1]).default;
    directiveList.push(file);
  });
  for (const direct of directiveList) {
    app.directive(direct.name, direct.directive);
  }
}
