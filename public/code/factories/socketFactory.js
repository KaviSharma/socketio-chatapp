app = app || app.angular("ChatApp");

app.factory('Socket', function () {
    var socket = io.connect("");
    return socket;
});