import $ from 'jquery';
import {fillHtml } from './templates';
import { reservation } from './res-data';

$(".container").html(fillHtml());
$(".reserve").click(reservation);
