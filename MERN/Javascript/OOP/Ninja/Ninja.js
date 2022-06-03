class Ninja
{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName()
    {
        console.log(`My name is ${this.name}`);
    }

    showStats()
    {
        console.log(`Name: ${this.name} \n    Health: ${this.health} \n    Strength: ${this.strength} \n    Speed: ${this.speed}`)
    }

    drinkSake()
    {
        this.health += 10;
    }
}


const nin1 = new Ninja("Eirikur", 100);
nin1.sayName();
nin1.showStats();
nin1.drinkSake();
nin1.showStats();