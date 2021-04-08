class Vehicle {
    public drive():void{
        console.log('Vrooooom!!');        
    }

    protected honk(): void{ //when protected cannot call outside only inside 
        console.log('beeeeeeep!!');
        
    }
}

const vehicle = new Vehicle()
vehicle.drive()
// vehicle.honk()

class Car extends Vehicle{
    // wheel:number
    // color:string

    constructor(public wheel:number, public color:string){
        super()
        // this.wheel = wheel
        // this.color = color;
    }

    //overriding
    public drive(): void{
        console.log('choo choo');        
    }

    startDrivingProcess(): void{
        this.drive()
        this.honk()
    }

}

const  car = new Car(4, 'red')
car.startDrivingProcess()
// car.honk()

