chatterApp.factory('GUI', function() {
  return require('nw.gui');
}).factory('GUIWin', ['GUI',
  function(gui) {
    return gui.Window.get();
  }
]);
