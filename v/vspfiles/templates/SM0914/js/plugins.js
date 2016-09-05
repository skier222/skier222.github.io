// Avoid 'console' errors in browsers that lack a console.
;(function() {
  
  var method
    , noop      = function noop() {}
    , methods   = [
                    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception',
                    'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile',
                    'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'
                  ]
    , length    = methods.length
    , console   = (window.console = window.console || {})
    ;

  while (length -= 1) {
    method      = methods[length];
    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();


// Place any jQuery/helper plugins below here:
// =============================================================

;(function($) {
  
  
  
})($jQueryModern)
