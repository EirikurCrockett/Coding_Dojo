using System;
using System.Security.Cryptography;
// using PokeApiNet;
using System.Net.Http;
using System.Threading.Tasks;

namespace Test
{
    class Program
    {
        static async void Main(string[] args)
        {
            Console.WriteLine("Waiting");
            Task.Delay(1000).Wait();
            Console.WriteLine("Waited");

        }



    }
}
