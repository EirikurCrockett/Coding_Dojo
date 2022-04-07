using System;

namespace WizardNinjaSamurai
{
    class Program
    {
        static void Main(string[] args)
        {
            Wizard rasputin = new Wizard("Rasputin");
            Samurai nobunaga = new Samurai("Nobunaga");
            Ninja nagato = new Ninja("Nagato");

            // rasputin.Attack(nobunaga);
            nagato.Steal(rasputin);
            nagato.Steal(rasputin);
            nagato.Steal(rasputin);
            nagato.Steal(rasputin);
            nagato.Steal(rasputin);
            nagato.Steal(rasputin);
            nobunaga.Attack(rasputin);

            rasputin.GetInfo();
            // nagato.GetInfo();

        }
    }
}
