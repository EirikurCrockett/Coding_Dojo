class Ninja
{
    constructor(name, health, strength = 3,speed = 3,){
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

class Sensei extends Ninja
{
    constructor(name, health = 200, strength = 10, speed = 10, wisdom = 10)
    {
        super(name, health, strength, speed);
        this.wisdom = 10;
    }

    speakWisdom(){

        const proverbs = [
            "The stake that sticks up gets hammered down.",
            "Not knowing is Buddha.",
            "Not seeing is a flower.",
            "Of flowers, the cherry blossom; of men, the warrior.",
            "Fall seven times and stand up eight",
            "Even monkeys fall from trees",
            "Causes bring results \nBad causes bring bad results"
        ]

        const proverb = proverbs[Math.floor(Math.random()*proverbs.length)]

        console.log(`${proverb}\n`)
        super.drinkSake()
    }

}


const nin1 = new Sensei("Eirikur");
nin1.sayName();
nin1.showStats();
// nin1.drinkSake();
nin1.speakWisdom();
nin1.showStats();
// nin1.speakWisdom();
// nin1.speakWisdom();
// nin1.speakWisdom();
// nin1.speakWisdom();