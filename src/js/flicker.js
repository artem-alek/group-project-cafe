import { callFlickr } from './apiCalls';
import { photoTemplate } from './templates';
function placePhotos () {
  return callFlickr().then(sortPhotos);
}

function sortPhotos (info) {
  var infoData = info.photoset.photo;
  infoData.forEach(photoTemplate);
}

export { placePhotos };
