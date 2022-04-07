using System;

namespace WizardNinjaSamurai
{
    class Ninja : Human
    {
        public Ninja(string name) : base(name, 0, 0, 175, 100)
        {

        }

        public override int Attack(Human target)
        {
            int dmg = Dexterity * 5;
            if(Crit(20))
            {
                dmg += 10;
                Console.WriteLine("Critical!");
            }
            target.HealthDown(dmg);
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage!");
            return target.Health;
        }

        public int Steal(Human target)
        {
            int amount = 5;
            target.HealthDown(amount);
            this.HealthUp(amount);
            if(this.Health > this.MaxHealth)
            
            {
                int reduce = this.Health - this.MaxHealth;
                Console.WriteLine(reduce);
                this.HealthDown(reduce);
                amount = 5 - reduce;
            }
            Console.WriteLine($"{Name} stole 5 health from {target.Name}, healing for {amount} health");
            return target.Health;
        }

        public bool Crit(int chance){
            Random rand = new Random();
            double crit = rand.NextDouble();
            if(crit <= (chance/100))
            {
                return true;
            } else
            {
                return false;
            }
        }
    }
}