'use strict';

angular.module('angularFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('loginWithToken', {
        url: '/login/:sessionToken',
        template: ' ',
        controller: function($stateParams, Auth, $location){
          if ($stateParams.sessionToken) {
            Auth.setSessionToken($stateParams.sessionToken, function(){$location.path('/');});
          }
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });