var $document = $(document);
var $wrapper = $('#wrapper');
var $window = $(window);

function setWrapperHeight() {
  $wrapper.height($document.height());
}

setWrapperHeight();

$window.on('resize', function() {
  setWrapperHeight();
});
