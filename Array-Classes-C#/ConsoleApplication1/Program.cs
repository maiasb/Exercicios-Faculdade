using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            int op = 1;
            int contn = 0;
            Contatos Contato = new Contatos(contn);
            string[] nome = new String[20];
            string[] email = new String[20];
            string[] cel = new String[20];
            while (op != 0)
            {
                Console.WriteLine("1: Cadastrar contato.");
                Console.WriteLine("2: Ver contatos.");
                Console.WriteLine("3: Editar contato.");
                Console.WriteLine("4: Excluir contato.");
                Console.WriteLine("0: Finalizar");
                op = int.Parse(Console.ReadLine());
                if (op == 1)
                {
                    Console.Clear();

                    Console.WriteLine("Nome do contato: ");
                    string newNome = Console.ReadLine();
                    Contato.setNome(contn, newNome);

                    Console.WriteLine("Email do contato: ");
                    string newEmail = (Console.ReadLine());
                    Contato.setEmail(contn, newEmail);

                    Console.WriteLine("Celular do contato: ");
                    string newCel = (Console.ReadLine());
                    Contato.setCel(contn, newCel);

                    Console.Clear();
                    Console.WriteLine($"Nome: {Contato.getNome(contn)}.\r\nEmail: {Contato.getEmail(contn)}.\r\nCelular: {Contato.getCel(contn)}.");
                    Console.ReadLine();
                    Console.Clear();
                    op = 1;

                    contn++;
                }
                else if ((op == 2) && (contn != 0))
                {
                    Console.Clear();
                    op = 4;
                    while (op == 4)
                    {
                        Console.WriteLine("1: Ver contatos cadastrados.");
                        Console.WriteLine("2: Buscar contato.");
                        Console.WriteLine("0: Menu anterior.");
                        op = int.Parse(Console.ReadLine());
                        Console.Clear();
                        if ((op == 1) && (contn != 0))
                        {
                            int I = 0;
                            while (I < contn)
                            {
                                if (Contato.getNome(I) != "")
                                {
                                    Console.WriteLine($"Nome: {Contato.getNome(I)}");
                                    Console.WriteLine($"Email: {Contato.getEmail(I)}");
                                    Console.WriteLine($"Celular: {Contato.getCel(I)}");
                                    Console.WriteLine("\r\n");

                                    I++;
                                }
                                else
                                {
                                    Console.WriteLine("Nenhum contato cadastrado.");
                                    I = 100;
                                }
                            }
                            Console.ReadKey();
                            Console.Clear();
                            op = 4;
                        }
                        if (op == 0)
                        {
                            op = 1;
                            Console.Clear();
                        }
                        if ((op == 2) && (contn != 0))
                        {
                            int I = 0;
                            Console.WriteLine("Email do contato");
                            string email2 = (Console.ReadLine());

                            while (I < contn)
                            {
                                if (Contato.getEmail(I) == email2)
                                {
                                    Console.Clear();
                                    Console.WriteLine($"Nome: {Contato.getNome(I)}");
                                    Console.WriteLine($"Email: {Contato.getEmail(I)}");
                                    Console.WriteLine($"Celular: {Contato.getCel(I)}");
                                    Console.ReadKey();
                                    Console.Clear();
                                }
                                I++;
                            }

                            op = 4;
                        }
                        if ((op == 1) && (contn == 0) || (op == 2) && (contn == 0))
                        {
                            Console.WriteLine("Nenhum contato cadastrado.");
                            Console.ReadKey();
                            Console.Clear();
                            op = 4;
                        }
                    }
                }
                else if ((op == 2) && (contn == 0))
                {
                    Console.WriteLine("Nenhum contato cdastrado.");
                    Console.ReadKey();
                    Console.Clear();
                    op = 1;
                }
                else if ((op == 3) && (contn != 0))
                {
                    int I = 0;
                    Console.WriteLine("-------------EDITAR------------\n");
                    Console.WriteLine("Email do contato");
                    string email2 = (Console.ReadLine());
                    while (I < contn)
                    {
                        if (Contato.getEmail(I) == email2)
                        {
                            Console.Clear();
                            Console.WriteLine($"Nome: {Contato.getNome(I)}");
                            Console.WriteLine($"Email: {Contato.getEmail(I)}");
                            Console.WriteLine($"Celular: {Contato.getCel(I)}");

                            Console.WriteLine("\n\nNome do contato: ");
                            string newNome = Console.ReadLine();
                            Contato.setNome(I, newNome);

                            Console.WriteLine("Email do contato: ");
                            string newEmail = (Console.ReadLine());
                            Contato.setEmail(I, newEmail);

                            Console.WriteLine("Celular do contato: ");
                            string newCel = (Console.ReadLine());
                            Contato.setCel(I, newCel);

                            Console.WriteLine("\nEdição concluída.");

                            Console.ReadKey();
                            Console.Clear();
                        }
                        I++;
                    }

                    op = 1;
                }
                else if ((op == 3) && (contn == 0))
                {
                    Console.WriteLine("Nenhum contato cdastrado.");
                    Console.ReadKey();
                    Console.Clear();
                    op = 1;
                }
                else if ((op == 4) && (contn != 0))
                {
                    int I = 0;
                    Console.WriteLine("-------------EXCLUIR------------\n");
                    Console.WriteLine("Email do contato");
                    string email2 = (Console.ReadLine());
                    while (I < contn)
                    {
                        if (Contato.getEmail(I) == email2)
                        {
                            Console.Clear();
                            Console.WriteLine($"Nome: {Contato.getNome(I)}");
                            Console.WriteLine($"Email: {Contato.getEmail(I)}");
                            Console.WriteLine($"Celular: {Contato.getCel(I)}");
                            
                            Contato.setNome(I, "");
                            Contato.setEmail(I, "");
                            Contato.setCel(I, "");

                            Console.WriteLine("\n\nContato excluído.");

                            Console.ReadKey();
                            Console.Clear();
                        }
                        I++;
                    }
                    op = 1;
                }
                else if ((op == 4) && (contn == 0))
                {
                    Console.WriteLine("Nenhum contato cdastrado.");
                    Console.ReadKey();
                    Console.Clear();
                    op = 1;
                }
                else if (op == 0)
                {
                    Console.Clear();
                    Console.WriteLine("Fim.");
                    Console.ReadLine();
                }
                else
                {
                    Console.Clear();
                    Console.WriteLine("Comando inválido.");
                    Console.ReadLine();
                }
            }
        }
    }
}