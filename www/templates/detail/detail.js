angular.module('starter')

.controller('DetailController', function($scope, $stateParams, $state, Currencies) {

  angular.forEach(Currencies, function (currency) {
    if (currency.code === $stateParams.currency) {
      $scope.currency = currency;
    }
  });

  if (angular.isUndefined($scope.currency.ticker)) {
    $state.go('tab.rates');
  }
});
