using System;

namespace FundamentalsOne
{
    class Program
    {
        static void Main(string[] args)
        {
            PrintLoop255();
            PrintLoop100By3And5();
            FizzBuzz();
            WhileFizzBuzz();
        }

        static void PrintLoop255()
        {
            for(int i = 1; i <= 255; i++)
            {
                Console.WriteLine(i);
            }
        }

        static void PrintLoop100By3And5()
        {
            for(int i = 1; i <= 100; i++)
            {
                if(i % 5 == 0 && i %3 != 0)
                {
                    Console.WriteLine(i);
                }
                else if(i % 5 != 0 && i %3 == 0)
                {
                    Console.WriteLine(i);
                }
                // else if(i % 5 == 0 && i %3 == 0)
                // {
                //     Console.WriteLine("Both");
                // }
                // else
                // {
                //     Console.WriteLine("Neither");
                // }
            }
        }

        static void FizzBuzz()
        {
            for(int i = 1; i <= 100; i++)
            {
                if(i % 5 != 0 && i %3 == 0)
                {
                    Console.WriteLine("Fizz");
                }
                else if(i % 5 == 0 && i %3 != 0)
                {
                    Console.WriteLine("Buzz");
                }
                else if(i % 5 == 0 && i %3 == 0)
                {
                    Console.WriteLine("FizzBuzz");
                }
                // else
                // {
                //     Console.WriteLine("Neither");
                // }
            }
        }

        static void WhileFizzBuzz()
        {
            int runner = 0;
            int finishLine = 100;
            while(runner <= finishLine)
            {
                runner++;
                if(runner % 5 != 0 && runner %3 == 0)
                {
                    Console.WriteLine("Fizz");
                    continue;
                }
                else if(runner % 5 == 0 && runner %3 != 0)
                {
                    Console.WriteLine("Buzz");
                    continue;
                }
                else if(runner % 5 == 0 && runner %3 == 0)
                {
                    Console.WriteLine("FizzBuzz");
                    continue;
                }
            }
        }
    }
}
