import $ from 'jquery';
import { ourStory } from './templates';

function storyGenerate () {
  $('.menu-button').removeClass('is-active');
  $('.reservation-button').removeClass('is-active');
  $('.story-button').addClass('is-active');
  $('.tab-info').html(ourStory);
}

export { storyGenerate };
