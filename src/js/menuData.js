import $ from 'jquery';
import { menuTemplate, menuTitle } from './templates';
import { getMenu } from './apiCalls';

function sortMenu(items) {
  Object.keys(items).forEach(function (key) {
    pullData(items[key], key);
  });

}

function pullData (menu, title) {
  $('.tab-info').append(menuTitle(title));
  for (var i=0; i < menu.length; i++) {
    var data = menu[i];
    var html = menuTemplate(data);
    $('.tab-info').append(html);
//function call will go and check sprites and then add class
    spriteUpdate(data);
  }
}

function menuButton (event) {
  $('.story-button').removeClass('is-active');
  $('.reservation-button').removeClass('is-active');
  $('.menu-button').addClass('is-active');
  $('.tab-info').empty();
  getMenu().then(sortMenu);
}


function spriteUpdate (data) {
  if (data.allergies === 1) {
    $('.fa-exclamation-circle').addClass('active1');
  }
  if (data.favorite === 1) {
    $('.fa-star').addClass('active2');
  }
  if (data.spicy === 1) {
    $('.fa-fire').addClass('active3');
  }
  if (data.vegan === 1) {
    $('.fa-square').addClass('active4');
  }
}



export {sortMenu, pullData, menuButton, spriteUpdate};
