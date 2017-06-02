import {Component, ApplicationRef} from '@angular/core';
declare let window: any;

@Component({
    selector: 'app',
    template: `
      <navbar></navbar>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
      `,
})
export class AppComponent {
  constructor(private appref:ApplicationRef) {
    window.app = this;
  }
}
