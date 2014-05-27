app = app || angular.module("ChatApp");

app.controller('RootController', function ($scope, $rootScope, $location, $log, Socket) {
    $scope.messages = [];
    $scope.sendMessageModal = {from: "", message: undefined};

    Socket.on('message', function (message) {
        $log.info(message);
        $scope.messages.push(message);
        $scope.$apply();
    });

    $scope.$watch('sendMessageModal', function () {

    });

    $scope.sendMessage = function () {
        if ($scope.sendMessageModal.message) {
            Socket.emit('message', $scope.sendMessageModal);
            $scope.sendMessageModal.message = undefined;
        }
    }
});