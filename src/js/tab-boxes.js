import $ from 'jquery';

function makeBoxes () {
  return `
    <div class="tabs is-boxed">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small"><i class="fa fa-hashtage"></i></span>
            <span>Our Story</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fa fa-cutlery"></i></span>
            <span>Menu</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fa fa-calendar"></i></span>
            <span>Reservation</span>
          </a>
        </li>
      </ul>
    </div>
  `
}

export { makeBoxes };
