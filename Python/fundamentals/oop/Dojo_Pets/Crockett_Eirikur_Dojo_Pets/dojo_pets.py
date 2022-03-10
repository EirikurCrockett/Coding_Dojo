
class Ninja:

    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
    
    def walk(self):
        self.pet.play()
        return self

    def feed(self):
        self.pet.eat()
        return self

    def bathe(self):
        self.pet.noise()
        return self

class Pet:


    def __init__(self, name , type , tricks ):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.energy = 50
        self.health = 50

    # implement the following methods:
    # sleep() - increases the pets energy by 25
    def sleep(self):
        self.energy_up(25)
        return self

    # eat() - increases the pet's energy by 5 & health by 10
    def eat(self):
        self.energy_up(5)
        self.health_up(10)
        return self

    # play() - increases the pet's health by 5

    def play(self):
        self.health_up(5)
        return self

    # noise() - prints out the pet's sound
    def noise(self):
        print("Bark")
        return self

    def health_up(self,num):
        self.health+=num
        if(self.health > 100):
            self.health=100
        return self

    def energy_up(self,num):
        self.energy+=num
        if(self.energy > 100):
            self.energy=100
        return self

    def check_pet_status(self):
        print(self.name, self.health, self.energy)
        return self

ninja = Ninja("Eirikur", "Crockett", 5, 5, Pet("doge", "dog", ['sit', 'roll over', 'shake']))

ninja.pet.check_pet_status()
ninja.walk().feed().bathe()
ninja.pet.check_pet_status()