using System;
using System.Collections.Generic;

namespace DeckOfCards
{
    public class Player
    {
        public string  name;

        public Deck deck;
        public List<Card> hand;

        public Player(string n, Deck d)
        {
            name = n;
            deck = d;
            hand = new List<Card>();
            Draw();
            Draw();
            Draw();
            Draw();
            Draw();
        }

        public void Draw()
        {
            hand.Add(deck.Deal());
        }

        public void CheckHand()
        {
            foreach(Card card in hand)
            {
                card.CheckCard();
            }
        }

        public void Discard(int index)
        {
            hand.RemoveAt(index);
        }

        public void PlayerInfo(){
            Console.WriteLine($"\n{this.name} has {hand.Count} cards in hand");
        }
    }
}