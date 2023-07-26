import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child2-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pushData(){
    const event = new CustomEvent('eventCustom', { detail: 1 });
    dispatchEvent(event);
  }

}
