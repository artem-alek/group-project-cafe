import $ from 'jquery';
import {menuTemplate, menuTitle} from './templates';
import { getMenu } from './apiCalls';

function sortMenu(items) {
    Object.keys(items).forEach(function (key) {
    pullData(items[key], key);
  });

}

  function pullData (menu, title) {
    //console.log(menu, title)
    $('.tab-content').append(menuTitle(title));
    for (var i=0; i < menu.length; i++) {
      var data = menu[i];
      var html = menuTemplate(data);
      $('.tab-content').append(html);
    }
  }

function menuButton (event) {
  $(".tab-content").empty();
   getMenu().then(sortMenu);
   }



export {sortMenu, pullData, menuButton};
