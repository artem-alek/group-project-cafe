import $ from 'jquery';
import {  fillHtml } from './templates';
import { reservation } from './res-data';


function makeBoxes () {
  return `
    <div class="tabs is-boxed">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small"><i class="fa fa-hashtag"></i></span>
            <span class="story-tab">Our Story</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fa fa-cutlery"></i></span>
            <span class="menu-tab">Menu</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fa fa-calendar"></i></span>
            <span class="reservation-tab">Reservation</span>
          </a>
        </li>
      </ul>
    </div>
  `
}

function makeForm (event) {
  $(".tab-content").html(fillHtml());
  $(".reserve").click(reservation);


}

export { makeBoxes, makeForm };
