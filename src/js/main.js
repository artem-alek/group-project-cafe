import $ from 'jquery';
import { makeBoxes } from './tab-boxes';
import {fillHtml } from './templates';
import { reservation } from './res-data';

//$(".container").html(fillHtml());
$(".reserve").click(reservation);
$('.tab-container').append(makeBoxes);
