animals = [
    {
        type: "Dog",
        mammal: true
    },{
        type: "Snake",
        mammal: false
    },{
        type: "Cheetah",
        mammal: true
    }
]
let mammals = []

animals.map (animal => {if(animal.mammal) mammals.push(animal.type)} )

console.log(mammals)