angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
        $scope.listings.push($scope.newListing);
        Listings.create($scope.newListing);
        $scope.newListing = {};
    };

    $scope.deleteListing = function(index) {
      var ind = $scope.listings[index];
        console.log(ind);
      
       /* //Listings.delete(index);
      Listings.delete(inde).then(function(response) {
        }, function(error) {
        $scope.listings.splice(index,1);
        console.log('Could not delete:', error);
        });
        */
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);