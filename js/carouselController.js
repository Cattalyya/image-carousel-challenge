angular.module('mainCarousel',[]).controller('CarouselController', function ($scope) {

  var imageFolderPath = "img/";
  var imageFilenames = ["1.jpg", "2.jpg", "3.jpg"];

  var DEFAULT_SELECTED_IMAGE_INDEX = 0;
  var selectedIndex;
  var numOfImages = 0;

  $scope.currentImgSrc = null;
  $scope.title = "KitCat Photography Album"

  var initialize = function(){
      numOfImages = imageFilenames.length;
      selectedIndex = DEFAULT_SELECTED_IMAGE_INDEX;
      $scope.currentImgSrc = "img/1.jpg";
  };

  var update = function(){
      $scope.currentImgSrc = imageFolderPath+imageFilenames[selectedIndex]
  };

  initialize();

  $scope.next = function() {
      selectedIndex = (selectedIndex+1) % numOfImages;
      update();
  };  

  $scope.prev = function() {
      if (selectedIndex == 0) {
          selectedIndex = numOfImages-1;
      } else  {
          selectedIndex = selectedIndex-1;
      }
      update();
  }; 

});