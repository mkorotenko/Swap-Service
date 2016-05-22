define(function (require) {

  "use strict";
  
  var $                   = require('jquery'),
      Backbone            = require('backbone'),
      ApplicationModel = Backbone.Model.extend({
        initialize: function(){
        },
        defaults: {
          path: [],
          title: 'SWAP',
          total: 0
        }
      });
  var application = new ApplicationModel();
  
  return application;
      
});
