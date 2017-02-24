import $ from 'jquery';
import { makeBoxes, makeForm } from './tab-boxes';
import { newsTemplate, addSocial } from './templates';
import { getNews } from './apiCalls';
import { locationTemplate } from './location';
import { specialsGenerate } from './specials';
import { menuButton } from './menuData';
import { storyGenerate } from './story';
import { placePhotos } from './flicker';


// Generate tab container & our story
$('.tab-container').append(makeBoxes);
storyGenerate();
$('.story-tab').click(storyGenerate);

// Clickable buttons for tab Reservation & Menu
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

// Generate Photos
$('.food-flicker').append(placePhotos);
