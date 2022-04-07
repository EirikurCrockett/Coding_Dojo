using System;

namespace DeckOfCards
{
    class Program
    {
        static void Main(string[] args)
        {
            Deck fiftyTwo = new Deck();
            Console.WriteLine(fiftyTwo);
            fiftyTwo.CheckDeck();
            Console.WriteLine();//Line Break
            fiftyTwo.Shuffle();
            fiftyTwo.CheckDeck();
            Console.WriteLine(); //Line Break
            Player eirikur = new Player("Eirikur", fiftyTwo);
            // fiftyTwo.AddPlayer(eirikur); //Does Not Work
            // fiftyTwo.CheckPlayers(); // Wont Work Without AddPlayer
            eirikur.CheckHand(); 
            Console.WriteLine(); //Line Break
            fiftyTwo.CheckDeck();
            Console.WriteLine(); //Line Break
            eirikur.Discard(2);
            eirikur.CheckHand();
        }
    }

}
