import $ from 'jquery';

function fillHtml () {
  return `
    <div class = "name">Full Name</div>
    <input class="inputName"/>
    <div class = "guests">Number of Guests</div>
    <input class="inputGuests"/>
    <div class = "date">Date</div>
    <input class="inputDate"/>
    <div class = "notes">Special Notes</div>
    <textarea class="textarea"></textarea>
    <div class = "seating">Seating Preference</div>
    <div>
     <select class="form-field">
        <option class = "indoor">Indoor</option>
        <option class = "outdoor">Outdoor</option>
        <option class = "bar">Bar</option>
     </select>

     </div>
     <div class = "reserve">Reserve Table</div>
    `;
}

function thankyouTemplate (field) {
  return `
      <div class="thank-you">Thank You ${field.name}! We have your ${field.seating} table for ${field.guests} guests on ${field.date}. We look forward to serving you then!"</div>
    `;
}
//     <div class = "name">Full Name</div>
//     <input class="form-field"="$"/>
// }

export { fillHtml, thankyouTemplate };
