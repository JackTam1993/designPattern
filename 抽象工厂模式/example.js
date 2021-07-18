// 重写书上的例子
class AbstractVehicleFactory {
    constructor() {

    }

    // 注册车辆的类型
    types = {}

    resgisterVehicle(type, Vehicle) {
        var proto = Vehicle.prototype;
        if (proto.drive && proto.breakDown) {
            types[type] = Vehicle;
        }
    }

    getVehicle(type) {
        var Vehicle = types[type];
        return (Vehicle) ? returnnewVehicle(customizations) : null;
    }
}

class Car {
    constructor(options) {
        this.doors = options.doors || 4;
        this.state = options.state || "brandnew";
        this.color = options.color || "silver";
    }
}

class Truck {
    constructor(options) {
        this.state = options.state || "used";
        this.wheelSize = options.wheelSize || "large";
        this.color = options.color || "blue";
    }
}

let car = new Car();
let truck = new Truck();

AbstractVehicleFactory.registerVehicle("car", car);
AbstractVehicleFactory.registerVehicle("truck", truck);

//基于抽象车辆类型实例化一个新car对象
var car = AbstractVehicleFactory.getVehicle('car', {
    color: "limegreen",
    state: "likenew"
});

//同理实例化一个新truck对象
var truck = AbstractVehicleFactory.getVehicle("truck", {
    wheelSize: 'medium',
    color: "neonyellow"
});