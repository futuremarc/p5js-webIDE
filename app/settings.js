var defaults = {
  fontSize: 14,
  tabSize: 2,
  tabType: "spaces",
  theme: 'tomorrow',
  consoleOrientation: 'horizontal',
  showSidebar: true,
  wordWrap: false,
  runInBrowser: false,
  fullScreen: false
};

var userSettings = {};

module.exports.load = function() {

  // get settings from local storage if they exist
  var settings = localStorage.userSettings;
  if (!settings) {
    settings = defaults;
  } else {
    try {
      settings = JSON.parse(settings);
    } catch(err) {
      settings = defaults;
    }
  }

  userSettings = settings;
  return settings;
};

module.exports.save = function(settings) {
  localStorage.userSettings = JSON.stringify(userSettings);
};

// module.exports.write = function() {
//   localStorage.userSettings = JSON.stringify(userSettings);
// };

module.exports.defaults = defaults;