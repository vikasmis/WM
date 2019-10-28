// replica of app.component.ts
import { Component } from '@angular/core';
import $ = require("jquery");

@Component({
  selector: 'app-userdetails',
  templateUrl: './app-userdetails.html',
  styleUrls: ['./general.scss']
})


// Tooltips
$('.tip').each(function () {
	$(this).(
	{
		html: true,
		title: $('#' + $(this).data('tip')).html()
	});

export class newAppComponent {
  show: boolean = true
}


