// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module( 'starter', [ 'ionic', 'starter.controllers', 'starter.services' ] )

.constant( 'config', {
  api: 'http://api.wp-app.org/wp-json/wp/v2' // Your WordPress
} )

.run( function( $ionicPlatform ) {
  $ionicPlatform.ready( function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if ( window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard ) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
      cordova.plugins.Keyboard.disableScroll( true );
    }
    if ( window.StatusBar ) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  } );
} )

.config( function( $stateProvider, $urlRouterProvider ) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state( 'app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  } )

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/index.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/posts/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/single.html',
        controller: 'singleCtrl'
      }
    }
  })

  .state( 'app.gallery', {
    url: '/gallery',
    views: {
      'menuContent': {
        templateUrl: 'templates/gallery.html',
        controller: 'galleryCtrl'
      }
    }
  } );

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise( '/app/home' );

} )

;
