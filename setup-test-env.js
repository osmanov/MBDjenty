require('babel-register')
require('babel-polyfill')

global.document = require('jsdom').jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = window.navigator;
global.Event = window.Event;