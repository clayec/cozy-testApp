angular.module('browserapp').controller('HomeAngCtrl', HomeAngCtrl);

HomeAngCtrl.$inject = ['CozySdk'];

function HomeAngCtrl() {
    var vm = this;

    vm.hello = "world";

}
