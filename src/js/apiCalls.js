import $ from 'jquery';
import { apiToken } from './token';
function getMenu(items) {
  return $.ajax({
    url: 'https://json-data.herokuapp.com/restaurant/menu/1',
    dataType: 'json',
    success: items
  });
}

function getNews(news) {
  return $.ajax({
    url: 'https://json-data.herokuapp.com/restaurant/news/1',
    dataType: 'json',
    success: news
  });
}

function callFlickr(photos) {
  return $.ajax({
    url: 'https://api.flickr.com/services/rest/?',
    success: photos,
    data: {
      method: 'flickr.photosets.getPhotos',
      api_key: apiToken,
      user_id: '148062826@N06',
      photoset_id: '72157678470873882',
      format: 'json',
      nojsoncallback: 1
    }
  });
}

export {getMenu, getNews, callFlickr };
