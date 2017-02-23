import $ from 'jquery';
import { makeBoxes, makeForm } from './tab-boxes';
import {fillHtml } from './templates';
import { reservation } from './res-data';

$('.tab-container').append(makeBoxes);
$('.reservation-tab').click(makeForm);
