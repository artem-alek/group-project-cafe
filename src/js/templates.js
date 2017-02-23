function fillHtml () {
  return `
    <div class = "name">Full Name</div>
    <input class="inputName"/>
    <div class = "guests">Number of Guests</div>
    <input class="inputGuests"/>
    <div class = "date">Date</div>
    <input class="inputDate" placeholder="month/date/year"/>
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

function menuTemplate (product) {
  return `
               <div class="menu-item">
               <div class="item"> ${product.item}</div>
               <div class="price"> ${product.price}</div>
               <div class="description"> ${product.description}</div>
               </div>
           `;
}

function menuTitle (title) {
  return `
    <div class="menu-title">${title.toUpperCase()}</div>
  `;
}

function newsTemplate (options) {
  return `
    <div class="news-key">Latest News</div>
    <span class="news-title>${options.title}</span>
    <span class="news-date">${options.date_published}</span>
    <div class="news-post">${options.post}</div>
  `;
}

function addSocial () {
  return `
      <a href = "#"><i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a>
      <a href = "#"><i class="fa fa-twitter fa-3x " aria-hidden="true"></i></a>
      <a href = "#"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
  `;
}

export { fillHtml, thankyouTemplate, menuTemplate, menuTitle, newsTemplate, addSocial};
