import $ from 'jquery';
import { makeBoxes, makeForm } from './tab-boxes';
import { newsTemplate } from './templates';
import { getNews } from './apiCalls';
import { locationTemplate } from './location';
import { specialsGenerate } from './specials';
import { menuButton } from './menuData';
import { addSocial} from './templates';


// Generate tab container
$('.tab-container').append(makeBoxes);

// Clickable buttons for tab
//added button for our story
$('.reservation-tab').click(makeForm);
$('.menu-tab').click(menuButton);

// Generates social media icons
$('.social-media').html(addSocial);

// Generates news page dynamically
getNews().then(newsTemplate).then(function (news) {
  $('.news').html(news);
});

// Generates specials page dynamically
specialsGenerate();

// Generate loction div dynamically
$('.location').html(locationTemplate);

//function to light up sprite if sprite is hovered and if data field is "1"


 // $(".fa-exclamation-circle").hover(function allergiesTemplate() {
 //      console.log ()
 //     //$("#msg_div").hide();
 //    // $("#msg_div").show();
 // });
$('.fa-exclamation-circle').tooltip();
$('.fa-star').tooltip();
$('.fa-fire').tooltip();
$('.fa-square').tooltip();
