(function (root) {

  var jquery = function (selector) {
    return new jquery.fn.init(selector)
  }

  jquery.fn = jquery.prototype = {
    constructor: jquery,
    version: '1.0.0',
    init: function (selector) {
      var elem, selector;

      elem = document.querySelector(selector);
      this[0] = elem;

      return this;
    },
    toArray: function () {

    },
    get: function () {

    },
    ready: function () {

    }

  }

  jquery.fn.init.prototype = jquery.fn;

  window.$ = window.jquery = jquery;

})

