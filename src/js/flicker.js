import { callFlickr } from './apiCalls';
import { photoTemplate } from './templates';
function placePhotos () {
  return callFlickr().then(sortPhotos);
}

function sortPhotos (info) {
  var infoData = info.photoset.photo;
  console.log(infoData);
  infoData.forEach(photoTemplate);
}

export { placePhotos };
