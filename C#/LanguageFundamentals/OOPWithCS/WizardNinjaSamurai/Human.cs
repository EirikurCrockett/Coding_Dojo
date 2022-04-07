using System;

namespace WizardNinjaSamurai
{
    class Human
    {
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health;

        public int Health
        {
            get { return health; }
        }

        private int maxHealth;

        public int MaxHealth
        {
            get { return maxHealth; }
        }

        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }

        public Human(string name, int str, int intel, int dex, int hp)
        {
            Name = name;
            Strength = str;
            Intelligence = intel;
            Dexterity = dex;
            health = hp;
            maxHealth = hp;
        }

        // Build Attack method
        public virtual int Attack(Human target)
        {
            int dmg = Strength * 3;
            target.HealthDown(dmg);
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage!");
            return target.health;
        }

        public void HealthUp(int amount)
        {
            this.health += amount;
        }
        public void HealthDown(int amount)
        {
            this.health -= amount;
        }

        public void GetInfo()
        {
            Console.WriteLine($"{Name}:\n   Strength: {Strength}\n   Intelligence: {Intelligence}\n   Dexterity: {Dexterity}\n   Health: {health}/{maxHealth}");
        }
    }


}