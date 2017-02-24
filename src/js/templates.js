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
               <div class="column item"> ${product.item}</div>
               <div class="column price"> ${product.price}</div>
               <div class="columns social">
                <div class="column is-three-quarters description"> ${product.description}</div>
                <div class="column is-one-quarter sprites">
                  <i class="fa fa-exclamation-circle fa-2x" title="This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance." aria-hidden="true"></i>
                  <i class="fa fa-star fa-2x" title="We have been doing this a long time and this item has become one of our favorites." aria-hidden="true"></i>
                  <i class="fa fa-fire fa-2x" title="This item is spicy, please handle with care and drink lots of water." aria-hidden="true"></i>
                  <i class="fa fa-square fa-2x" title="This item contains no meat and has been prepared without the use of animal products." aria-hidden="true"></i>
                </div>
                  </div>
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
