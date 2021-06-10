using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.Sql;
using System.Data.SqlClient;

namespace Contatos
{
    class Contatos
    {
        // INÍCIO
        static void Main(string[] args)
        {
            // VARIÁVEIS / OPERADORES PARA CONDIÇÕES
            Console.Clear();
            string op;
            string op2;

            // INSTANCIAÇÃO DO OBJETO
            Visita visita = new Visita();

            // LAÇO PARA O PRIMEIRO MENU (CRUD)
            do
            {
                Console.WriteLine("\n1: Buscar contatos.\n");
                Console.WriteLine("2: Cadastrar novo contato.\n");
                Console.WriteLine("0: Finalizar.\n");

                op = Console.ReadLine();

                // CONDIÇÃO PARA MENU DE BUSCAR CONTATOS -----------------------------------------------------------------------------------------------------------------------------
                if (op == "1")
                {
                    // LAÇO PARA O SEGUNDO MENU (BUSCAR TODOS OU ESPECÍFICO)
                    do
                    {
                        Console.Clear();

                        Console.WriteLine("\n1: Buscar todos os contatos.\n");
                        Console.WriteLine("2: Buscar contato específico.\n");
                        Console.WriteLine("0: Menu anterior.\n");

                        op2 = Console.ReadLine();
                        Console.Clear();

                        // CONDIÇÃO PARA RESULTADOS DA BUSCA
                        if (op2 == "1")
                        {
                            string op3;

                            do
                            { // CHAMADA DO MÉTODO PARA BUSCAR TUDO
                                visita.getDadosAll();

                                Console.WriteLine("\nDigite <0> para RETORNAR AO MENU ANTERIOR...");
                                Console.WriteLine("\nDigite <edit> para editar um contato...");
                                Console.WriteLine("\nDigite <del> para editar um contato...");
                                op3 = Console.ReadLine();

                                // CONDIÇÃO PARA EDITAR CONTATO
                                if (op3 == "edit")
                                {
                                    Console.Clear();

                                    visita.getDadosAll();

                                    Console.WriteLine("\nSelecione um ID: ");
                                    Console.WriteLine("\nDigite <cancel> para cancelar edição: ");
                                    string ID = Console.ReadLine();

                                    if (ID == "")
                                    {
                                        Console.WriteLine("\nComando inválido.");
                                        Console.ReadLine();
                                    }
                                    else if (num(ID))
                                    {
                                        Console.Clear();

                                        string mensagem = BuscarID(Convert.ToInt32(ID));

                                        if (mensagem == "")
                                        {
                                            Console.WriteLine("\n----------------------------------------------- ");

                                            Console.WriteLine("\nEditar nome: ");
                                            string nome = Console.ReadLine();

                                            Console.WriteLine("\nEditar E-mail: ");
                                            string email = Console.ReadLine();

                                            Console.WriteLine("\nEditar celular: ");
                                            string cel = Console.ReadLine();

                                            if (!num(cel) || cel.Length < 8)
                                            {
                                                Console.WriteLine("\n\nCelular inválido!!");
                                                Console.ReadLine();
                                            }
                                            else
                                            {
                                                visita.updtDados(Convert.ToInt32(ID), nome, email, cel);
                                            }
                                        }
                                        else
                                        {
                                            Console.Clear();
                                            Console.WriteLine(mensagem);
                                            Console.ReadLine();
                                        }
                                    }
                                    else if (ID == "cancel")
                                    {
                                        op3 = "cancel";
                                    }
                                    else
                                    {
                                        Console.WriteLine("\nComando inválido.");
                                        Console.ReadLine();
                                    }
                                }

                                // CONDIÇÃO PARA DELETAR CONTATO
                                else if (op3 == "del")
                                {
                                    Console.Clear();

                                    visita.getDadosAll();

                                    Console.WriteLine("\nSelecione um ID: ");
                                    Console.WriteLine("\nDigite <cancel> para cancelar edição: ");
                                    string ID = Console.ReadLine();

                                    if (ID == "")
                                    {
                                        Console.WriteLine("\nComando inválido.");
                                        Console.ReadLine();
                                    }
                                    else if (num(ID) && BuscarIDD(Convert.ToInt32(ID)))
                                    {
                                        Console.Clear();
                                        BuscarID(Convert.ToInt32(ID));
                                        Console.WriteLine("\n\n---------------DELETAR---------------");
                                        Console.WriteLine("\nEssa viagem é realmente necessária?");
                                        Console.WriteLine("\nY: Claro que é necessária. Eu sou o diabo necessário.");
                                        Console.WriteLine("\nN: Não");
                                        string con = Console.ReadLine();

                                        if (con == "Y" || con == "y")
                                        {
                                            visita.delDados(Convert.ToInt32(ID));
                                            Console.ReadLine();
                                        }
                                        else if (con == "N" || con == "n")
                                        {

                                        }
                                        else
                                        {
                                            Console.WriteLine("\nComando inválido.");
                                            Console.ReadLine();
                                        }
                                    }
                                    else if (ID == "cancel")
                                    {
                                        op3 = "cancel";
                                    }
                                    else if (num(ID))
                                    {
                                        if (!BuscarIDD(Convert.ToInt32(ID)))
                                        {
                                            Console.WriteLine("\nID inválido.");
                                            Console.ReadLine();
                                        }
                                    }
                                    else
                                    {
                                        Console.WriteLine("Comando inválido.");
                                        Console.ReadLine();
                                    }
                                }
                                else if (op3 == "0")
                                {
                                    op3 = "0";
                                }
                                else
                                {
                                    Console.WriteLine("\nComando inválido.");
                                    Console.ReadLine();
                                }

                                Console.Clear();
                            } while (op3 != "0");
                        }
                        // CONDIÇÃO PARA BUSCAR APENAS CONTATOS COM AS INFORMAÇÕES INSERIDAS
                        else if (op2 == "2")
                        {
                            Console.Clear();

                            Console.WriteLine("\nNome do contato: ");
                            string nome = Console.ReadLine();

                            Console.WriteLine("\nE-mail do contato: ");
                            string email = Console.ReadLine();

                            Console.WriteLine("\nTelefone do contato: ");
                            string cel = Console.ReadLine();

                            // CHAMADA DO MÉTODO
                            visita.getDados(nome, email, cel);

                            Console.Clear();
                        }
                        else if (op2 == "0")
                        {

                        }
                        else
                        {
                            Console.WriteLine("\nComando inválido.");
                            Console.ReadLine();
                        }
                    } while (op2 != "0");
                }

                // CONDIÇÃO PARA CADASTRAR NOVO CONTATO ------------------------------------------------------------------------------------------------------------------------------
                else if (op == "2")
                {
                    Console.Clear();

                    Console.WriteLine("\nDigite o nome completo: ");
                    string nome = Console.ReadLine();

                    Console.WriteLine("\nInforme um endereço de E-mail: ");
                    string email = Console.ReadLine();

                    Console.WriteLine("\nInforme um número para contato (APENAS NÚMEROS): ");
                    //int cel = int.Parse(lerNumeros());
                    string cel = Console.ReadLine();
                    if (!num(cel) || cel.Length < 8)
                    {
                        Console.WriteLine("\n\nNúmero inválido!!");
                        Console.ReadLine();
                    }
                    else
                    {
                        // CHAMADA DO MÉTODO
                        visita.setDados(nome, email, cel.ToString());
                    }

                }
                else if (op == "0")
                {

                }
                else
                {
                    Console.Clear();
                    Console.WriteLine("\nComando inválido.");
                    Console.ReadLine();
                }

                Console.Clear();

            } while (op != "0");

            Console.Clear();
            Console.WriteLine("\nObrigado! :)\n");
            Console.ReadLine();
        }


        // MÉTODOS ===============================================================================================================

        // BUSCAR CONTATO POR ID
        public static string BuscarID(int ID)
        {
            // DEFININDO A CONEXÃO COM O SERVIDOR
            SqlConnection conn = new SqlConnection(@"Data Source=RAYDESOL\SQLEXPRESS;Initial Catalog=DBProva;User ID=sa;Password=L3i4mais");

            try
            {
                // CHARAMA DE STORED PROCEDURE
                SqlCommand com = new SqlCommand("spBuscarID", conn);
                com.CommandType = CommandType.StoredProcedure;

                // ATRIBUIÇÃO DE PARÂMETROS E ENTRADA E SAÍDA
                com.Parameters.AddWithValue("@ID", ID);
                com.Parameters.Add("@MSG", SqlDbType.VarChar, 100).Direction = ParameterDirection.Output;

                // ABRIR CONEXÃO COM O SERVIDOR
                conn.Open();

                SqlDataReader dr = com.ExecuteReader();

                // ESCRITA DOS DADOS ENCONTRADOS
                if (dr.Read())
                {
                    Console.WriteLine("\nID: " + dr["ID"].ToString());
                    Console.WriteLine("\nNome: " + dr["NOME"].ToString());
                    Console.WriteLine("\nE-mail: " + dr["EMAIL"].ToString());
                    Console.WriteLine("\nCelular: " + dr["CEL"].ToString());
                }
                conn.Close();

                conn.Open();
                com.ExecuteNonQuery();
                string mensagem = com.Parameters["@MSG"].Value.ToString();
                conn.Close();

                if (mensagem != "")
                {
                    Console.WriteLine(mensagem);
                }

                return mensagem;
            }
            catch (Exception ex)
            {
                string mensagem = "erro";
                Console.WriteLine(mensagem + ex);
                Console.ReadLine();
                return mensagem;
            }
        }

        // VALIDAR ID PARA DELEÇÃO
        public static bool BuscarIDD(int ID)
        {
            // DEFININDO A CONEXÃO COM O SERVIDOR
            SqlConnection conn = new SqlConnection(@"Data Source=RAYDESOL\SQLEXPRESS;Initial Catalog=DBProva;User ID=sa;Password=L3i4mais");
            bool eita = false;

            try
            {
                // CHARAMA DE STORED PROCEDURE
                SqlCommand com = new SqlCommand("spBuscarID", conn);
                com.CommandType = CommandType.StoredProcedure;

                // ATRIBUIÇÃO DE PARÂMETROS E ENTRADA E SAÍDA
                com.Parameters.AddWithValue("@ID", ID);
                com.Parameters.Add("@MSG", SqlDbType.VarChar, 100).Direction = ParameterDirection.Output;

                // ABRIR CONEXÃO COM O SERVIDOR
                conn.Open();

                com.ExecuteNonQuery();
                string mensagem = com.Parameters["@MSG"].Value.ToString();
                conn.Close();

                if (mensagem == "")
                {
                    eita = true;
                }

                return eita;
            }
            catch (Exception ex)
            {
                string mensagem = "erro";
                Console.WriteLine(mensagem + ex);
                Console.ReadLine();
                return eita;
            }
        }

        // BOOL PARA A VALIDAÇÃO DA LINHA 223
        public static bool num(string op)
        {
            bool eita = false;

            if (op.All(char.IsDigit))
            {
                eita = true;
            }
            return eita;
        }

        // MÉTODO QUE PERMITE APENAS NÚMEROS NO CELULAR
        //public static string lerNumeros(int a)
        //{
        //    ConsoleKeyInfo cki;
        //    string entrada = "";
        //    while (true)
        //        if (Console.KeyAvailable)
        //        {
        //            cki = Console.ReadKey(true);
        //            if (cki.Key == ConsoleKey.Backspace)
        //            {
        //                if (entrada.Length == 0) continue;
        //                entrada = entrada.Remove(entrada.Length - 1);
        //                Console.Write("\b \b"); //Remove o último caractere digitado
        //            }
        //            if (cki.Key == ConsoleKey.Enter)
        //            {
        //                break;
        //            }
        //            if ((ConsoleKey.D0 <= cki.Key) && (cki.Key <= ConsoleKey.D9) ||
        //                (ConsoleKey.NumPad0 <= cki.Key) && (cki.Key <= ConsoleKey.NumPad9))
        //            {
        //                entrada += cki.KeyChar;
        //                Console.Write(cki.KeyChar);
        //            }

        //        }
        //    return entrada;
        //}
    }
}
