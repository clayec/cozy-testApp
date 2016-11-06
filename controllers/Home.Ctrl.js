angular.module('browserapp').controller('HomeAngCtrl', HomeAngCtrl);

HomeAngCtrl.$inject = ['CozySdk'];

function HomeAngCtrl(CozySdk) {
    var vm = this;

    vm.hello = "world";

}
