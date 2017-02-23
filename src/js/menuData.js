import $ from 'jquery';
import {menuTemplate, menuTitle} from './templates';

function sortMenu(items) {
  Object.keys(items).forEach(function (key) {
    pullData(items[key], key);
  });
  // for (var prop in items) {
  //   pullData(items[prop], prop);
  // }
  // pullData(items.appetizers, 'appetizers');
  // pullData(items.entrees);
  // pullData(items.sides);
}

function pullData (menu, title) {
  $('.testing').append(menuTitle(title));
  for (var i=0; i < menu.length; i++) {
    var data = menu[i];
    var html = menuTemplate(data);
    $('.testing').append(html);
  }
}
  // for (var i =0; i < items.appetizers.length; i++) {
  //   var product = items.appetizers[i];
  //   var html = menuTemplate(product);
  //   $('.testing').append(html);
  // }
  // for (var i =0; i < items.entrees.length; i++) {
  //   var product = items.entrees[i];
  //   var html = menuTemplate(product);
  //   $('.testing').append(html);
  // }
  // for (var i =0; i < items.sides.length; i++) {
  //   var product = items.sides[i];
  //   var html = menuTemplate(product);
  //   $('.testing').append(html);
  // }







export {sortMenu};
