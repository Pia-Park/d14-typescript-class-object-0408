const carMakers = ['ford', 'toyota', 'chevy']
// const carMakers: (string | number)[] = ['ford', 'toyota', 'chevy', 0]

const dates = [new Date(), new Date()] //inference

const carsByMake: string[][] = [] //must have initialization 

//helps with inference when extracting values
const car1 = carMakers[0]
const myCar = carMakers.pop()

//Prevent incompatible values 
// carMakers.push(100)
carMakers.push('hyundai')

//help with map 
carMakers.map((car:string):string => {
    return car.toUpperCase()
})

console.log(carMakers);


//Flexible type
const importantDates: (Date | string)[] = []
importantDates.push('2021/04/08')
importantDates.push(new Date())

console.log(importantDates);
