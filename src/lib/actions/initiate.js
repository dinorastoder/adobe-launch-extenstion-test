'use strict';
var loadScript = require('@adobe/reactor-load-script');
var scriptUrl = 'https://s.pinimg.com/ct/core.js';

module.exports = function(settings, event) {
  // Action to perform.
  turbine.logger.log('Base Code was successfully loaded.');
  turbine.logger.log(turbine.getExtensionSettings());
  loadScript(scriptUrl);
};
