using System;
using System.Security.Cryptography;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {

            string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            string code = "";
            Random rand = new Random();
            for(int i = 0; i < 14; i++)
            {
                code = code + chars[rand.Next(0,chars.Length)];
            }
            
            Console.WriteLine(code);
        }
    }
}
