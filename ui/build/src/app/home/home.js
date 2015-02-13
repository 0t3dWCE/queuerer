/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'queuerer.home', [
  'ui.router',
  'ui.bootstrap',
  'ui.bootstrap.alert',
  'ui.bootstrap.dropdownToggle',
  'queuerer.camera'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller('DropdownCtrl', function ($scope, $log) {
  $scope.dropChoices = [
    { link: "#", name: 'The first choice!'},
    { link: "#", name: 'And another choice for you.'},
    { link: "#", name: 'but wait! A third!'}
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
})

.controller('AlertDemoCtrl', function ($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function(ttype) {
    $scope.alerts.push({type: ttype ,msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl',  ['$scope', '$log', '$http', function( $scope, $log, $http ) {
    $scope.rows = [
        { id: 1, color: "red", type: "car", count: "many"},
        { id: 2, color: "green", type: "house", count: "few"},
        { id: 3, color: "blue", type: "apple", count: "56"},
        { id: 4, color: "gray", type: "phone", count: "123123"},
        { id: 5, color: "yellow", type: "girl", count: "9"},
        { id: 6, color: "white", type: "man", count: "1"}
    ];
    $scope.closeAlerts = function(index) {
        $scope.res.splice(index, 1);
    };
    $scope.getResults = function() {

          $log.log("Before post");
          // get the URL from the input
          var boottyInput = $scope.bootty;
          $log.log(boottyInput);
          var userInput = $scope.input_url;
          $log.log(userInput);

          if(!userInput) {
              userInput=boottyInput;
          }
          if(!userInput) {
              userInput="XX";
          }
          // fire the API request
          $http.post('/stat', {"url": userInput}).
            success(function(results) {
              $log.log(results);
              // say View to update via $scope magic
              $scope.res=results;
            }).
            error(function(error) {
              $log.log(error);
            });
        };

    }

]);


