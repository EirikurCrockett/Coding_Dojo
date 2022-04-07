using System;
using System.Collections.Generic;

namespace CollectionsPractice
{
    class Program
    {
        static void Main(string[] args)
        {

            int[] nums = {0,1,2,3,4,5,6,7,8,9};
            string[] names = {"Tim", "Martin", "Nikki", "Sara"};
            bool[] TrueFalse = {true, false, true, false, true, false, true, false, true, false};

            List<string> icecream = new List<string>();
            icecream.Add("Vanilla");
            icecream.Add("Chocolate");
            icecream.Add("Cookies and Cream");
            icecream.Add("Rocky Road");
            icecream.Add("Fudge Tracks");
            Console.WriteLine(icecream.Count);
            Console.WriteLine(icecream[2]);
            icecream.RemoveAt(2);
            Console.WriteLine(icecream.Count);

            Dictionary<string,string> kidsAndIcecream = new Dictionary<string, string>();
            for(int i = 0; i < names.Length; i++)
            {
                kidsAndIcecream.Add(names[i], icecream[i]);
            }
            foreach(KeyValuePair<string,string> entry in kidsAndIcecream)
            {
                Console.WriteLine($"{entry.Key} likes {entry.Value}");
            }

            

        }
    }
}
