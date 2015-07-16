app.controller('MainMenuController', function($scope, $http, $rootScope, $cookies) {
    $scope.rememberMe = false;

    $http.get('/api/accounts').success(function(data) {
        $scope.user = data;
        $rootScope.user = data;

        $rootScope.$broadcast('onAfterInitUser', data);
    });

    if($cookies.rememberMe)
        $scope.rememberMe = $cookies.rememberMe;

    $scope.$watch('rememberMe', function(newVal, oldVal){
        if(newVal !== oldVal){
            $cookies.rememberMe = $scope.rememberMe;
        }
    });
});

app.controller('RightClickMenuController', function($scope, $http, $rootScope) {
    $scope.createTopic = function(name, event){

        if(!$rootScope.tree)
            $rootScope.tree = {};

        $rootScope.tree.topic = {
            name: name,
            subTopics: [],
            resources:[],
            position: {x:event.x, y:event.y}
        };

        console.log("creating topic");
    };

    $scope.createSubTopic = function(name, topic){
        /*
        if(topic){
            topic.push()
        }

        $rootScope.tree.course.subTopics.push({

        });
        */
        console.log("creating sub topic");
    }
});