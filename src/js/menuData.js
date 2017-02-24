import $ from 'jquery';
import {menuTemplate, menuTitle, allergiesTemplate} from './templates';
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
//function call will go and check sprites and then add class
    spriteUpdate(data);
  }
}

function menuButton (event) {
  $('.tab-content').empty();
  getMenu().then(sortMenu);
}


function spriteUpdate (data) {
  if (data.allergies === 1) {
    console.log(data.allergies)
    $('.fa-exclamation-circle').addClass('active1');
  }
  if (data.favorite === 1) {
    console.log(data.favorite)
    $('.fa-star').addClass('active2');
  }
  if (data.spicy === 1) {
    console.log(data.spicy)
      $('.fa-fire').addClass('active3');
  }
  if (data.vegan === 1) {
    console.log(data.vegan)
      $('.fa-square').addClass('active4');
  }
}



export {sortMenu, pullData, menuButton, spriteUpdate};
