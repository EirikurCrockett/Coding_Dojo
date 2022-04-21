using System;

namespace IronNinja
{
    public class SpiceHound : Ninja
    {
        public override bool IsFull{
            get { return calorieIntake > 1200; }
        }

        public override void Consume(IConsumable item)
        {
            if(IsFull){
                Console.WriteLine("Cant eat anymore");
                
            }
            else{
                item.GetInfo();
                calorieIntake += item.Calories;
                if(item.IsSpicy){
                    calorieIntake -= 5;
                }
                ConsumptionHistory.Add(item);
            }
        }
    }
}
