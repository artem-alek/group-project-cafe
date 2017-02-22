function fillHtml () {
    return `
    <div class = "name">Full Name</div>
    <input class="form-field"="${field.name}"/>
    <div class = "guests">Number of Guests</div>
    <input class="form-field"="${field.guests}"/>
    <div class = "date">Date</div>
    <input class="form-field"="${field.date}"/>
    <div class = "notes">Special Notes</div>
    <textarea class="form-field tall" ="${field.notes}"></textarea>
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
