using System;
using System.Collections.Generic;

namespace DeckOfCards
{
    public class Deck
    {
        public List<Card> Cards;
        public List<Player> Players;
        

    
        public Deck()
        {   
            Cards = new List<Card>();
            List<string> suits = new List<string>
            {
                "Clubs",
                "Spades",
                "Hearts",
                "Diamonds"
            };

            foreach(string suit in suits)
            {
                for(var i = 1; i <= 13; i++)
                {
                    Card playingCard = new Card(suit, i);
                    Cards.Add(playingCard);
                }
            }

        }

        public void CheckDeck()
        {
            foreach(Card card in Cards)
            {
                card.CheckCard();
            }
        }
        public void Shuffle()
        {
            List<Card> shuffled = new List<Card>();
            Random rand = new Random();
            while(Cards.Count > 0)
            {   
                int num = rand.Next(0, Cards.Count);
                Card temp = Cards[num];
                // Console.WriteLine(temp);
                Cards.RemoveAt(num);
                shuffled.Add(temp);
            }

            foreach(Card card in shuffled)
            {
                Cards.Add(card);
            }
        }

        public Card Deal()
        {
            Card temp = Cards[0];
            Cards.RemoveAt(0);
            return temp;
        }

        public void Reset()
        {
            Cards.Clear();
            List<string> suits = new List<string>
            {
                "Clubs",
                "Spades",
                "Hearts",
                "Diamonds"
            };

            foreach(string suit in suits)
            {
                for(var i = 1; i <= 13; i++)
                {
                    Card playingCard = new Card(suit, i);
                    Cards.Add(playingCard);
                }
            }
            Shuffle();
        }

        public void AddPlayer(Player p)
        {
            // Console.WriteLine(p);
            Players.Add(p);
        }

        public void CheckPlayers(){
            foreach(Player player in Players)
            {
                player.PlayerInfo();
            }
        }
    }

        
}