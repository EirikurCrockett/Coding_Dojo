using System;

namespace WizardNinjaSamurai
{
    class Samurai : Human
    {
        public Samurai(string name) : base(name, 0, 0, 0, 200)
        {

        }

        public override int Attack(Human target)
        {
            if(target.Health < (target.MaxHealth/2))
            {
                target.HealthDown(target.Health);
            }
            Console.WriteLine($"{Name} executed {target.Name}");
            return target.Health;
        }

        public int Meditate()
        {
            int amount = this.MaxHealth - this.Health;
            this.HealthUp(amount);
            Console.WriteLine($"{Name} meditated, healing {amount} health");
            return this.Health;
        }
    }
}