// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'highcharts-ng'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.history', {
    url: '/history?currency',
    views: {
      'tab-history': {
        templateUrl: 'templates/history/history.html',
        controller: 'HistoryController'
      }
    }
  })

  .state('tab.rates', {
    url: '/rates',
    views: {
      'tab-rates': {
        templateUrl: 'templates/rates/rates.html',
        controller: 'RatesController'
      }
    }
  })

  .state('tab.detail', {
    url: '/detail/:currency',
    views: {
      'tab-rates': {
        templateUrl: 'templates/detail/detail.html',
        controller: 'DetailController'
      }
    }
  })

  .state('tab.currencies', {
    url: '/currencies',
    views: {
      'tab-currencies': {
        templateUrl: 'templates/currencies/currencies.html',
        controller: 'CurrenciesController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/rates');

});
