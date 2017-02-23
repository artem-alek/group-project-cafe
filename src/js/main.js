import $ from 'jquery';
import { makeBoxes, makeForm } from './tab-boxes';
import {fillHtml } from './templates';
import { reservation } from './res-data';
import { getMenu } from './apiCalls';
import { menuButton } from './menuData';
import { addSocial} from './templates';

$('.tab-container').append(makeBoxes);
$('.reservation-tab').click(makeForm);
$('.menu-tab').click(menuButton);
$('.social-media').html(addSocial);
