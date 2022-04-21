using System;
using System.Collections.Generic;


namespace IronNinja
{
    class SweetTooth : Ninja
    {
        // provide override for IsFull (Full at 1500 Calories)
        public override bool IsFull{
            get { return calorieIntake > 1500; }
        }

        public override void Consume(IConsumable item)
        {
            if(IsFull){
                Console.WriteLine("Cant eat anymore");
                
            }
            else{
                item.GetInfo();
                calorieIntake += item.Calories;
                if(item.IsSweet){
                    calorieIntake += 10;
                }
                ConsumptionHistory.Add(item);
            }

            
        }
    }


}
