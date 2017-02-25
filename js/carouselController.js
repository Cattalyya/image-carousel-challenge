angular.module('mainCarousel',[]).controller('CarouselController', function ($scope) {

  var imageFolderPath = "img/";
  var imageFilenames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

  var DEFAULT_SELECTED_IMAGE_INDEX = 0;
  var selectedIndex;
  
  $scope.totalImages = 0;
  $scope.currentImgSrc = null;
  $scope.title = "KitCat Photography Album"

  var initialize = function(){
      $scope.totalImages = imageFilenames.length;
      selectedIndex = DEFAULT_SELECTED_IMAGE_INDEX;
      $scope.currentImgSrc = "img/1.jpg";
  };

  var update = function(){
      $scope.currentImgSrc = imageFolderPath+imageFilenames[selectedIndex]
  };

  initialize();

  $scope.next = function() {
      selectedIndex = (selectedIndex+1) % $scope.totalImages;
      update();
  };  

  $scope.prev = function() {
      if (selectedIndex == 0) {
          selectedIndex = $scope.totalImages-1;
      } else  {
          selectedIndex = selectedIndex-1;
      }
      update();
  }; 

  $scope.getIndicatorClasses= function(){
      var tmp= imageFilenames.map( function(element, index){
          if (index == selectedIndex){
              return "fa fa-circle"
          } 
          return "fa fa-circle-o";
      });
      return tmp;
  };

  $scope.selectImage = function(index){
      selectedIndex = index;
      console.log("select", index)
      update();
  }

});