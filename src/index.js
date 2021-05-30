import { component } from './component';
import { utility } from './utility';

console.log(component.data.saveName + ' version:', component.version.number, component.version.name);

component.data.init();
component.layout.init();
component.grid.init();
component.bookmark.init();
component.theme.init();
component.toolbar.init();
component.menu.init();
component.modal.init();
component.autoSuggest.init();
component.keyboard.init();

component.menu.open();
