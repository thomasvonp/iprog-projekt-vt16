myApp.controller('persistenceCtrl', ['$scope','$rootScope', 'Authentication', function($scope, $rootScope, Authentication) {
	




	$scope.logRoot = function () {


	// FROM BEFORE PULL REQUEST
	// if ($rootScope.currentUser!==undefined && $rootScope.currentUser!=='') {
       
  //      console.log($rootScope.currentUser.$value);
  //     } else {
  //       console.log('nope');
  //     }

		console.log('logRoot: ', $rootScope.currentUser.$value);
		console.log('logRoot w/$value: ', Authentication.$value);
		return null;
	};

	$scope.ud = function () {
		// console.log(Authentication.getUserData());
		return Authentication.getUserData();
	};

	// FROM BEFORE PULL REQUEST
	// $scope.addCommentToUser = function (test) {
	// 	// console.log(test.header, test.comment);
	// 	// console.log('roscp.currUsr in func: '.$rootScope.currentUser);
	// 	// console.log($rootScope.currentUser.$value);
	// 	$rootScope.currentUser.$value[test.header] = test.comment;
	// 	$rootScope.currentUser.$save();
	// 	// console.log($rootScope.currentUser);
	// 	return;
	// };

	$scope.check = false;
	$scope.addCommentToUser = function (test) {
		// console.log(test.header, test.comment);
		// console.log('roscp.currUsr in func: '.$rootScope.currentUser);
		// console.log($rootScope.currentUser.$value);
		// $rootScope.currentUser.$value = test;
		
		
		//Get current data:
		
		console.log($scope.check);
		if ($scope.check === false) {
			Authentication.getCurr();
			console.log($scope.check);
			$scope.check = true;
			console.log($scope.check);
		}
		// console.log(curr);
		var update = Authentication.updateCurr(test);
		console.log(update);
		// $rootScope.currentUser.$save();
		// console.log($rootScope.currentUser);
		return;
	};
}]);