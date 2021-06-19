alert("Задача игры найти сидоровича за найменшое количиство кликов. Если понятно жми ОК");
var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
    var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
    var getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Сидорович готов принемать поситителей";
    } 
    else if (distance < 20) {
        return "Сидорович в бункере";
    } 
    else if (distance < 40) {
        return "Сидорович подходит к бункеру";
    } 
    else if (distance < 80) {
        return "Сидорович почти приехал";
    } 
    else if (distance < 160) {
        return "Сидорович далеко";
    } 
    else if (distance < 320) {
        return "Сидорович очень далеко";
    } 
    else {
        return "Сидрорович уехал";
    } };

    var width = 1280;
    var height = 720;
    var clicks = 0;

    var target = {
        x: getRandomNumber(width),
        y: getRandomNumber(height)
    };

    $("#map").click(function (event) {
    clicks++;

    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);
    if (distance < 8) {
        alert("Сидорович найден! Сделано кликов: " + clicks);
        clicks = 0;
    } });