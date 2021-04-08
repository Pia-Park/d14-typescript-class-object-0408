const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 50
}

//type alias
type Drink = [string, boolean, number] 

const pepsi:Drink = ['brown', true, 40]
const stripe:Drink = ['clear', true, 70]
const tea:Drink = ['yellow', false, 0]