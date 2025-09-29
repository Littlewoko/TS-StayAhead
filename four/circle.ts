type Circle = {
    radius: number;
    area: () => number;
    circumference: () => number;
    scale: (factor: number) => void;
}

var circle: Circle = {
    radius: 6,
    area: function() {
        return Math.PI * this.radius ** 2;
    },
    circumference: function() {
        return 2 * Math.PI * this.radius;
    },
    scale: function(factor) {
        this.radius *= factor;
    }
}