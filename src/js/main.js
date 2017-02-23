import $ from 'jquery';
import { makeBoxes, makeForm } from './tab-boxes';
import { newsTemplate } from './templates';
import { getNews } from './apiCalls';
import { locationTemplate } from './location';
import { specialsGenerate } from './specials';
import { menuButton } from './menuData';

// Generate tab container
$('.tab-container').append(makeBoxes);

// Clickable buttons for tab
//added button for our story
$('.reservation-tab').click(makeForm);
$('.menu-tab').click(menuButton);

// Generates news page dynamically
getNews().then(newsTemplate).then(function (news) {
  $('.news').html(news);
});

// Generates specials page dynamically
specialsGenerate();

// Generate loction div dynamically
$('.location').html(locationTemplate);
