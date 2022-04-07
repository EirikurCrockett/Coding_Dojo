using System;
using System.Collections.Generic;


namespace DeckOfCards
{
    public class Card
    {
        public string Name;
        public string Suit;
        public int Value;

        public Card(string suit, int value)
        {
            this.Name = GetName(value);
            this.Suit = suit;
            this.Value = value;
        }

        public string GetName(int value){
            List<string> names = new List<string>{
                "Ace",
                "Two",
                "Three",
                "Four",
                "Five",
                "Six",
                "Seven",
                "Eight",
                "Nine",
                "Ten",
                "Jack",
                "Queen",
                "King"
            };

            return(names[value-1]);

        }

        public void CheckCard(){
            Console.WriteLine($"{this.Name} {this.Suit} {this.Value}");
        }
    
    }

    
}
