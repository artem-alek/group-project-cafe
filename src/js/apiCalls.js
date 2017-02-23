import $ from 'jquery';

function getMenu(items) {

    return $.ajax({
      url: 'https://json-data.herokuapp.com/restaurant/menu/1',
      dataType: 'json',
      success: items

    })
}

export {getMenu};
