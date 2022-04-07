using System;

namespace WizardNinjaSamurai
{
    class Wizard : Human
    {
        public Wizard(string name) : base(name, 0, 25, 0, 50)
        {

        }

        public override int Attack(Human target)
        {
            int dmg = Intelligence * 5;
            int amount = dmg;
            target.HealthDown(dmg);
            this.HealthUp(dmg);
            if(this.Health > this.MaxHealth){
                int reduce = this.Health - this.MaxHealth;
                this.HealthDown(reduce);
                amount = dmg - reduce;
            }
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage!\n{Name} healed for {amount} Health!");
            return target.Health;
        }

        public int Heal(Human target)
        {
            int amount = Intelligence * 10;
            target.HealthUp(amount);
            if(target.Health > target.MaxHealth)
            {
                int reduce = target.Health - target.MaxHealth;
                target.HealthDown(reduce);
                amount = amount - reduce;
            }
            Console.WriteLine($"{Name} Healed {target.Name} for {amount} health!");
            return target.Health;
        }
    }
}