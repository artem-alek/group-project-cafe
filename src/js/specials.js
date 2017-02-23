import $ from 'jquery';
import { getMenu } from './apiCalls';
import { menuTemplate } from './templates';

function specialsGenerate () {
  getMenu().then(function (food){
    foodType(food.appetizers);
    foodType(food.entrees);
    foodType(food.sides);
  });
}

function foodType (food) {
  food.forEach(function (foods) {
    if (foods.id === 25) {
      $('.specials').html(function () { return `
        <div class="speicals-Title">Today's Special</div>
        <img class="specials-image" src="http://www.foodofy.com/wp-content/uploads/2015/06/scallops-21.jpg"/>
        `;
      });
      $('.specials').append(menuTemplate(foods));
    }
  });
}

export { specialsGenerate };
