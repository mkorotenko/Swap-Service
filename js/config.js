// Filename: main.js
require.config({

    baseUrl: 'js/lib',

    paths: {
      app: '../app',
      tpl: '../tpl',
      js: '../../js',
      view: '../app/view',
      model: '../app/model'
    },

    map: {
      '*': {
        }
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', 'js/router'], function ($, Backbone, Router) {

    Date.prototype.toSWAPDate = function() {
      var yyyy = this.getFullYear().toString(),
          mm = (this.getMonth()+1).toString(),
          dd  = this.getDate().toString();
      return yyyy+'-'+(mm[1]?mm:"0"+mm[0])+'-'+(dd[1]?dd:"0"+dd[0]);
    };
    Date.prototype.toSWAPTime = function() {
      var hh = this.getHours().toString(),
          mm = this.getMinutes().toString();
      return (hh[1]?hh:"0"+hh[0])+':'+(mm[1]?mm:"0"+mm[0]);
    };
    Date.prototype.toSWAPDateTime = function() {
      return this.toSWAPDate()+' '+this.toSWAPTime();
    };

    router = new Router();
    Backbone.history.start();

});
