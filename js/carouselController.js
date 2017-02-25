
angular.module('mainCarousel',[]).controller('CarouselController', function ($scope) {

  var imageFolderPath = "img/";
  var imageFilenames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

  var DEFAULT_SELECTED_IMAGE_INDEX = 0;
  var selectedIndex;

  $scope.totalImages = 0;       // total number of images
  $scope.currentImgSrc = null;  // source path of a current image
  $scope.title = "KitCat Photography Album" // title of carousel

  var initialize = function(){
      $scope.totalImages = imageFilenames.length;
      selectedIndex = DEFAULT_SELECTED_IMAGE_INDEX;
      $scope.currentImgSrc = "img/1.jpg";
  };

  var update = function(){
      $scope.currentImgSrc = imageFolderPath+imageFilenames[selectedIndex]
  };

  initialize();

  /**
   * Display the next image
   */
  $scope.next = function() {
      selectedIndex = (selectedIndex+1) % $scope.totalImages;
      update();
  };  

  /**
   * Display the previous image
   */
  $scope.prev = function() {
      if (selectedIndex == 0) {
          selectedIndex = $scope.totalImages-1;
      } else  {
          selectedIndex = selectedIndex-1;
      }
      update();
  }; 

  /**
   * Provide list of css class of each indicator to differentiate between 
   * active indicator, representing a currently displayed images, and inactive indicator.
   * @return {[String]} css class of all indicators 
   */
  $scope.getIndicatorClasses= function(){
      var tmp= imageFilenames.map( function(element, index){
          if (index == selectedIndex){
              return "fa fa-circle"
          } 
          return "fa fa-circle-o";
      });
      return tmp;
  };

  /**
   * Display an image that match the index
   * @param  {[Number]} integer index of image we want to display; 0 <= index < totalImages
   */
  $scope.selectImage = function(index){
      selectedIndex = index;
      console.log("select", index)
      update();
  }

});