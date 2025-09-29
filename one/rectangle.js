function scaleRectangle(rectangle, scaleFactor) {
    var width = rectangle.width * scaleFactor;
    var height = rectangle.height * scaleFactor;
    return {
        width: width,
        height: height
    };
}
var rect = {
    width: 10,
    height: 100
};
var scaleFactor = 5;
var res = scaleRectangle(rect, scaleFactor);
console.log(res);
