import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {OpenAPIService} from 'lucybot/app/services/openapi';

declare let window:any;

@Component({
    selector: 'home',
    template: `
      <h1>LucyBot Embed Demo</h1>
      <p>This is a demonstration of LucyBot's embeddable UI components, using Angular 2. It uses the Spotify API specification.</p>

      <h2>Operation Documentation Component</h2>
      <p>The Operation Documentation Component displays the input and output for a given operation</p>
      <div class="box">
        <operation-documentation [apiCall]="apiCall"></operation-documentation>
      </div>

      <auth></auth>
      <h2>API Call Component</h2>
      <p>The API Call Component shows an API console for a given operation</p>
      <div class="box">
        <h3>
          <span>GET /albums</span>
          <button class="btn btn-primary pull-right" (click)="apiCallComponent.execute()" [disabled]="apiCallComponent.executing">
            <span>{{openapi.secrets.isAuthenticated(apiCallComponent.apiCall.operation) ? 'Send Request' : 'Sign in to execute'}}</span>
            <i class="fa fa-right fa-play" [hidden]="apiCallComponent.executing"></i>
            <i class="fa fa-right fa-spin fa-refresh" [hidden]="!apiCallComponent.executing"></i>
          </button>
        </h3>
        <api-call #apiCallComponent [apiCall]="apiCall"></api-call>
      </div>

      <h2>Schema Component</h2>
      <p>The schema component displays JSON Schema</p>
      <div class="box">
        <schema [schema]="apiCall.operation.responses[200].schema"></schema>
      </div>
      `,
    styles: [`
      .box {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 15px;
      }
      h3 {
        margin-bottom: 22px;
      }
    `]
})
export class HomeComponent {
  apiCall:any;

  constructor(private openapi:OpenAPIService) {
    window.home = this;
    this.openapi.retrieveSpec('default');
    this.apiCall = openapi.getAPICall('GET /albums');
  }
}
