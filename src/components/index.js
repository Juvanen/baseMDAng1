import angular from 'angular';

import {SideMenu} from './sideMenu.js';
import {MainHeader} from './mainHeader.';

export default angular.module('app.components', [])
  .component('sideMenu', SideMenu)
  .component('mainHeader', MainHeader)
  .name;

