define(function (require) {

  "use strict";

  var $                   = require('jquery'),
      _                   = require('underscore'),
      Backbone            = require('backbone');

  var BasePageView = Backbone.View.extend({
    renderPath: function() {
      var currentPath = $('#current-path', this.$el),
          pathStr = '',
          path = this.model.get('path');
      currentPath.html('');
      currentPath.append('<a href="#">Account list</a>');
      for(var i=0; i<path.length; i++){
        currentPath.append('<span>/</span>');
        pathStr += '/'+path[i];
        currentPath.append('<a href="#card'+pathStr+'">'+path[i]+'</a>');
      }
      return this;
    },
    update: function() {
      this.render();
      this.busy(false);
      return this;
    },
    busy: function(isBusy){
      var blanket = $('.blanket-spinner',this.$el);
      if(!isBusy) blanket.css('display','none');
      else blanket.css('display','flex');
      return this;
    },
    initialize: function () {
      var header            = _.template(require('text!tpl/header.html')),
        body                = _.template(require('text!tpl/body.html')),
        spinner             = _.template(require('text!tpl/spinner.html'));
      var appTemplate = $(header());
      appTemplate.append($(body()).append(spinner()));
      this.template = _.template(appTemplate.html());
      return this;
    },
    open: function(){
      return this.render();
    },
    pageNotFound: function(){
      this.render(true);
      $('#data-container').html('Page not found');
      return this;
    },
    render: function (hideSpinner) {
      this.$el.html(this.template(this.model.attributes));
      this.renderPath();
      return this;
    }
  });

  return BasePageView;

});
