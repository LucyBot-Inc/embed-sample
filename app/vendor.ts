import 'lucybot/app/vendor-common';

// Polyfills
import 'es6-shim';
import 'zone.js/dist/zone';
import 'reflect-metadata';

// Libraries
declare let window:any;
window.jquery = require('jquery');
import 'bootstrap/dist/js/bootstrap.js';

// CSS
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'prismjs-themes/dist/coy.min.css';
