function fillHtml () {
  return `
    <div class = "name">Full Name</div>
    <input class="form-field"="$"/>
    <div class = "guests">Number of Guests</div>
    <input class="form-field"="/>
    <div class = "date">Date</div>
    <input class="form-field"/>
    <div class = "notes">Special Notes</div>
    <textarea class="form-field tall"></textarea>
    <div class = "seating">Seating Preference</div>
    <div>
     <select class="form-field">
        <option>Indoor</option>
        <option>Outdoor</option>
        <option>Bar</option>
     </select>

     </div>
     <div class = "submit">Reserve Table</div>
    `;
}

export { fillHtml };
