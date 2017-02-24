import $ from 'jquery';
import {  fillHtml } from './templates';
import { reservation } from './res-data';


function makeBoxes () {
  return `
    <div class="tabs is-boxed">
      <ul>
        <li class="story-button">
          <a>
            <span class="icon is-small"><i class="fa fa-hashtag"></i></span>
            <span class="story-tab">Our Story</span>
          </a>
        </li>
        <li class="menu-button">
          <a>
            <span class="icon is-small"><i class="fa fa-cutlery"></i></span>
            <span class="menu-tab">Menu</span>
          </a>
        </li>
        <li class="reservation-button">
          <a>
            <span class="icon is-small"><i class="fa fa-calendar"></i></span>
            <span class="reservation-tab">Reservation</span>
          </a>
        </li>
      </ul>
    </div>
  `;
}

function makeForm (event) {
  $('.menu-button').removeClass('is-active');
  $('.story-button').removeClass('is-active');
  $('.reservation-button').addClass('is-active');
  $('.tab-content').html(fillHtml());
  $('.reserve').click(reservation);
}

export { makeBoxes, makeForm };
