///<reference path="../node_modules/@types/core-js/index.d.ts" />
///<reference types="node" />
require('./index.html');
import {enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import 'rxjs/Rx';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
