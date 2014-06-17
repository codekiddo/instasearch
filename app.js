angular.module("InstagramSearcher", ["ngAnimate"])
  .controller("MainController", function($scope, $http) {

    $scope.searchInstagram = function(keyword) {

      $scope.keyword = keyword;
      $scope.submitted = false;

      var url = "https://api.instagram.com/v1/tags/" + keyword + "/media/recent";
      var request = {
        client_id: "674a97e1cf54412f901cf266420aa496",
        callback: "JSON_CALLBACK"
      };

      $http({
        method: "JSONP",
        url: url,
        params: request
      })
      .success(function(response) {
        $scope.results = response.data;
        $scope.keyword = null;
        $scope.searched = keyword;
        $scope.submitted = true;
      })
      .error(function() {
        alert("Error!");
      })
    }
  });