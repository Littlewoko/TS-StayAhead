type Rectangle = {
    width: number
    height: number
}

function scaleRectangle(rectangle: Rectangle, scaleFactor: number): Rectangle {
    const width = rectangle.width * scaleFactor;
    const height = rectangle.height * scaleFactor;

    return {
        width,
        height
    }
}

const rect: Rectangle = {
    width: 10, 
    height: 100
}

const scaleFactor = 5;

const res = scaleRectangle(rect, scaleFactor);
console.log(res);
