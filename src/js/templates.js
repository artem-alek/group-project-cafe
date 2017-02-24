import $ from 'jquery';

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

function ourStory () {
  return `
    <div class="story">We are proud of our little corner cafe in downtown Atlanta, Georgia.
    Artem's has been a staple cafe that has been providing decades of perfect latte's
    and the sweetest deserts. Many celeberties have enjoyed Artem's services. The founders
    of Artem's were immigrants from Europe and never imaged that their small cafe would gain
    such popularity in the cinema world. Two decades later their children run the cafe
    and their popularity still grows. Many more movies are using our cafe since the recent
    annoucment that Hollywood is moving to Atlanta! Here are some of the movies we been in!
    </div>
    <img src="http://static.srcdn.com/wp-content/uploads/Famous-Reused-Movie-Sets-Quality-Cafe-Diner.jpg"/>
    <div class="story">Our cafe has been in many movies and TV Shows, can been seen in Mad Men when Don Draper talks with his half-brother? That was also the Artem's Cafe, only with '60s hairdos and indoor smoking allowed.
    <img src="http://s3.crackedcdn.com/phpimages/article/4/5/1/159451_v3.jpg"/>
    <div class ="story">Here's Brad Pitt discussing some serious stuff with ... Vince Vaughn in Mr. and Mrs. Smith:
    <img src="http://s3.crackedcdn.com/phpimages/article/4/5/6/159456.jpg?v=2"/>
  `;
}

function photoTemplate (photo) {
  $('.photos-images').append(`
    <div class="column photo-stream">
      <img src="https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg"/>
    </div>
  `);
}

export { fillHtml, thankyouTemplate,
  menuTemplate, menuTitle, newsTemplate, addSocial, ourStory, photoTemplate };
