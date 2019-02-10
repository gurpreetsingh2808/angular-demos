import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss']
})
export class CustomComponentComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
