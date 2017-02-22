import $ from 'jquery';
import {thankyouTemplate} from './templates';

function reservation(event) {
  var field = {};
  field.name = $(".inputName").val();
  field.seating = $(".seating").val();
  field.guests = $(".inputGuests").val();
  field.date = $(".inputDate").val();

  console.log(field);
  $(".container").html(thankyouTemplate(field));
}

export {reservation}
