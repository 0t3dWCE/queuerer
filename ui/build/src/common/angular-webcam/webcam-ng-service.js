angular.module('queuerer.camera.service', [])
.factory('CameraService', function($window) {
  var videoElement = document.querySelector('video');
  var hasUserMedia = function() {
    return !!getUserMedia();
  };

  var getUserMedia = function() {
    navigator.getUserMedia = ($window.navigator.getUserMedia ||
                              $window.navigator.webkitGetUserMedia ||
                              $window.navigator.mozGetUserMedia ||
                              $window.navigator.msGetUserMedia);
    return navigator.getUserMedia;
  };

  var getVideoElement = function() {
      return videoElement;
  };

  return {
    hasUserMedia: hasUserMedia(),
    getUserMedia: getUserMedia,
    getVideoElement: getVideoElement
  };
});