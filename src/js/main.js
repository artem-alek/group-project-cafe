import $ from 'jquery';
import { makeBoxes, makeForm } from './tab-boxes';
import { newsTemplate } from './templates';
import { getNews } from './apiCalls';
import { locationTemplate } from './location';
import { specialsGenerate } from './specials';

$('.tab-container').append(makeBoxes);
$('.reservation-tab').click(makeForm);

// Generates news page dynamically
getNews().then(newsTemplate).then(function (news) {
  $('.news').html(news);
});

// Generates specials page dynamically
specialsGenerate();

// Generate loction div dynamically
$('.location').html(locationTemplate);
