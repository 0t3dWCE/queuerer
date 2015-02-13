angular.module('queuerer.camera', ['queuerer.camera.service'])
.controller('CameraController', function($scope, CameraService) {
    $scope.hasUserMedia = CameraService.hasUserMedia;
    $scope.w = 'undefined';
    $scope.h = 'undefined';
    $scope.show = true;
    $scope.play = true;
    //if (!scope.hasUserMedia) {return;}
    var userMedia = CameraService.getUserMedia();
          //videoElement = document.querySelector('video');
    var videoElement = CameraService.getVideoElement();

    var onSuccess = function(stream) {
        if (navigator.mozGetUserMedia) {
            videoElement.mozSrcObject = stream;
        } else {
            var vendorURL = window.URL || window.webkitURL;
            videoElement.src = window.URL.createObjectURL(stream);
        }
        // Just to make sure it autoplays
        videoElement.play();
    };
    // If there is an error
    var onFailure = function(err) {
        console.error(err);
    };

    navigator.getUserMedia({
        video: {
            mandatory: {
                maxHeight: 1000,
                maxWidth: 1000
            }
        },
        audio: true
        }, onSuccess, onFailure);

    $scope.updateSize = function() {
        navigator.getUserMedia({
        video: {
            mandatory: {
                //maxHeight: $scope.h,
                //maxWidth: $scope.w
                maxHeight: ($scope.h === 'undefined') ? 200: $scope.h,
                maxWidth: ($scope.w === 'undefined') ? 200: $scope.w
            }
        },
        audio: true
        }, onSuccess, onFailure);
    };

    $scope.hideVideo = function() {
        $scope.show = ($scope.show === true) ? false: true;
    };

    $scope.stopPlayVideo = function() {
        if ($scope.play === true) {
            $scope.play = false;
            videoElement.pause();
            return;

        } else {
            $scope.play = true;
            videoElement.play();
            return;

        }
    };
});