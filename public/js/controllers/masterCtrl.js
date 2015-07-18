module.exports = function($scope, $state) {
  setTimeout(function() {
    $state.go('intro');
  }, 1)
}
