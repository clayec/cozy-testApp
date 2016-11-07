angular.module('browserapp').controller('HomeAngCtrl', HomeAngCtrl);
HomeAngCtrl.$inject = ['CozySdk'];

function HomeAngCtrl(CozySdk) {
   var vm = this;

    CozySdk.defineRequest('Contact', 'all', 'function(doc) { emit(doc.n); }')
    .then(function () {
      return CozySdk.runRequest('Contact', 'all')
    })
    .then(function(res) {
      vm.contacts = res;
    })
    .catch(function(error) {
        vm.error = error;
    });
}
