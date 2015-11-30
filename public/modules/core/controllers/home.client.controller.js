'use strict';

angular.module('core').controller('HomeController', ['$scope', '$modal', 'Authentication', '$compile', '$log', 'Translations',
	function($scope, $modal, Authentication, $compile, $log, Translations) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.viewMontessori = function(){
			// console.log('test');
			triggerModal();
		};

		var triggerModal = function(){
			var contentModal = $modal.open({
	          templateUrl: '/modules/core/views/montessoriModalContent.client.view.html',
	          controller: function($scope, $modalInstance) {
	            $scope.ok = function(data) {
	              $modalInstance.close();
	            };
	            $scope.cancel = function() {
	              $modalInstance.dismiss('cancel');
	            };
	          },
	          size: 'lg',
	          resolve: {
	            listData: function() {
	              return true;
	            }
	          }
	        });
		};

			//Run translation if selected language changes
		$scope.translate = function(){
			console.log('testing');
	       Translations.getTranslation($scope, $scope.selectedLanguage);
		};   
		$scope.selectedLanguage = 'en';
		$scope.translate();		
	}
]);