app.controller('SearchBoxController', function ($scope, $http, $location, $rootScope) {

  var isAdvancedSearch = function () {
    var containsSearchPath = $location.absUrl().includes('/search');
    return containsSearchPath;
  }

  $scope.showQuickSearchResults = function () {
    var str = $scope.queryText;
    var isQueryValid = (!str || /^\s*$/.test(str)) == false;
    return isQueryValid && !isAdvancedSearch();
  };

  $scope.hasResults = function () {
    var r = $scope.result;
    return r != null && (
      r.categories.length > 0 ||
      r.courses.length > 0 ||
      r.videoAnnotations.length > 0 ||
      r.pdfAnnotations.length > 0 ||
      r.contentNodes.length > 0
    );
  };

  $scope.$watch('queryText', function (searchTerm) {

    $rootScope.$broadcast('searchQueryChanged', {
      state: searchTerm
    });

    // Do not show the search hints 
    // when advanced search page is open
    if (!searchTerm || searchTerm.length == 0 || isAdvancedSearch()) {
      $scope.result = null;
      return;
    }

    if (searchTerm === $scope.queryText) {
      $http.get('/api/search?term=' + searchTerm)
        .success(function (data) {
          $scope.result = data;
        });
    }
  });
});