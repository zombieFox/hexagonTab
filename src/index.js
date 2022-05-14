import { component } from './component';

console.log(component.APP_NAME + ' version:', component.version.number, component.version.name);

component.data.init();

component.grid.init();

component.theme.init();

component.layout.init();

component.toolbar.init();

component.bookmark.init();

component.pageLock.init();

component.keyboard.init();

// component.menu.open();
