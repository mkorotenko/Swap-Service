// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'model/application'
], function($, _, Backbone, entity){

    "use strict";

  var AppRouter = Backbone.Router.extend({
      routes: {
        '' : 'accounts',
        // 'card/:account': 'transactions',
        // 'card/:account/:record': 'editTransaction'
      },
      accounts: function() {
        // app.openPage('account');
        require(['view/applicationView'], function(BaseView){
          var appView = new BaseView({el:'#application',model: entity});
          appView.open();
        });
      },
      // transactions: function(account) {
      //   app.switchPage('transaction', account);
      // },
      // editTransaction: function(account,record) {
      //   var currentModel = app.currentCollection.get(record);
      //   app.editPage('transaction', currentModel);
      // }
      // setFilter: function(params) {
      //   console.log('app.router.params = ' + params);
      //   window.filter = params.trim() || '';
      //   app.accList.trigger('reset');
      // },
    });

  return AppRouter;
  
});
