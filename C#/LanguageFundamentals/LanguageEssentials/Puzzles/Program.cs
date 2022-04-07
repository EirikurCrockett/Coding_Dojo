using System;
using System.Collections.Generic;


namespace Puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            RandomArray();
            CoinFlip();
            Names();
        }
// ======================================[]======================================
//                         Start of Random Array Functions
// ======================================[]======================================
        public static void RandomArray()
        {
            int[] randomNumbers = BuildArray(10);

            foreach(int num in randomNumbers)
            {
                Console.Write($"{num}  ");
            }
            Console.WriteLine($"\nMin: {FindMin(randomNumbers)}");
            Console.WriteLine($"Max: {FindMax(randomNumbers)}");
            Console.WriteLine($"Sum: {FindSum(randomNumbers)}");
        }
        public static int RandomNumber(int min, int max)
        {
            Random rand = new Random();
            int num = rand.Next(min, max);
            return num;

        }

        public static int[] BuildArray(int length)
        {
            int[] numArray = new int[length];
            for(int i = 0; i < length; i++)
            {
                numArray[i] = RandomNumber(5, 25);
            }

            return numArray;
        }

        public static int FindMin(int[] array)
        {
            int min = array[0];
            foreach(int num in array)
            {
                if(num < min)
                {
                    min = num;
                }
            }
            return min;
        }

        public static int FindMax(int[] array)
        {
            int max = array[0];
            foreach(int num in array)
            {
                if(num > max)
                {
                    max = num;
                }
            }
            return max;
        }

        public static int FindSum(int[] array)
        {
            int sum = 0;
            foreach(int num in array)
            {
                sum += num;
            }
            return sum;
        }
// ======================================[]======================================
//                          End of Random Array Functions
// ======================================[]======================================

// ======================================[]======================================
//                         Start of Coin Flip Functions
// ======================================[]======================================

        public static void CoinFlip()
        {
            
            for( int i = 0; i < 10; i++)
            {
                CoinToss();
                HeadsTails();
            }

        }
        
        public static void CoinToss()
        {
            Console.WriteLine("Tossing A Coin");
        }

        public static string HeadsTails()
        {
            int num = RandomNumber(0, 2);
            // Console.WriteLine(num);
            if(num == 0){
                Console.WriteLine("Heads");
                return "Heads";
            }
            else{
                Console.WriteLine("Tails");
                return "Tails";
            }
        }

// ======================================[]======================================
//                            End of Coin Flip Functions
// ======================================[]======================================
// ======================================[]======================================
//                             Start of Names Functions
// ======================================[]======================================

        public static void Names()
        {
            List<string> names = GetListNames();
            Console.WriteLine(" ");
            PrintList(names);
            names = Shuffle(names);
            Console.WriteLine(" ");
            PrintList(names);
            names = FiveOrLess(names);
            Console.WriteLine(" ");
            PrintList(names);
        }

        public static List<string> GetListNames()
        {
            List<string> names = new List<string>();
            names.Add("Todd");
            names.Add("Tiffany");
            names.Add("Charlie");
            names.Add("Geneva");
            names.Add("Sydney");
            
            return names;
        }

        public static List<string> Shuffle(List<string> list)
        {  
            List<string> shuffled = new List<string>();
            while(list.Count > 0)
            {   
                int num = RandomNumber(0, list.Count);
                string temp = list[num];
                // Console.WriteLine(temp);
                list.Remove(temp);
                shuffled.Add(temp);
            }
            return shuffled;
        }

        public static List<string> FiveOrLess(List<string> list)
        {
            List<string> shortNames = new List<string>();

            foreach (string listItem in list)
            {
                if(listItem.Length <= 5)
                {
                    shortNames.Add(listItem);
                }
            }
            return shortNames;
        }

        public static void PrintList(List<string> list)
        {
            foreach (string listItem in list)
            {
                Console.WriteLine(listItem);
            }
        }

    }
}
