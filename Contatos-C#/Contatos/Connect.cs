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
    class Connect
    {
        SqlConnection conn = new SqlConnection(@"Data Source=RAYDESOL\SQLEXPRESS;Initial Catalog=DBProva;User ID=sa;Password=L3i4mais");

        public void setDados(string nome, string email, string cel)
        {
            try
            {
                // CHAMADA DE STORED PROCEDURE + CONEXÃO
                SqlCommand com = new SqlCommand("spCadContato", conn);
                com.CommandType = CommandType.StoredProcedure;

                // ADICIONANDO PARÂMETROS DE ENTRADA E SAÍDA
                com.Parameters.AddWithValue("@NOME", nome);
                com.Parameters.AddWithValue("@EMAIL", email);
                com.Parameters.AddWithValue("@CEL", cel);
                com.Parameters.Add("@MSG", SqlDbType.VarChar, 100).Direction = ParameterDirection.Output;

                // INICIA CONEXÃO
                conn.Open();
                com.ExecuteNonQuery();

                string mensagem = com.Parameters["@MSG"].Value.ToString();

                conn.Close();

                Console.WriteLine("\n");
                Console.WriteLine(mensagem);
                Console.WriteLine("\nPressione <Enter> para prosseguir...");
                Console.ReadLine();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Erro" + ex);
            }
            finally
            {
                conn.Close();
            }
        }

        public void getDados(string nome, string email, string cel)
        {
            SqlConnection conn = new SqlConnection(@"Data Source=RAYDESOL\SQLEXPRESS;Initial Catalog=DBProva;User ID=sa;Password=L3i4mais");

            try
            {
                // CHAMADA DE STORED PROCEDURE + CONEXÃO
                SqlCommand com = new SqlCommand("spBuscarContato".ToString(), conn);
                com.CommandType = CommandType.StoredProcedure;

                // ADICIONANDO PARÂMETROS DE ENTRADA E SAÍDA
                com.Parameters.AddWithValue("@NOME", nome);
                com.Parameters.AddWithValue("@EMAIL", email);
                com.Parameters.AddWithValue("@CEL", cel);
                com.Parameters.Add("@MSG", SqlDbType.VarChar, 100).Direction = ParameterDirection.Output;

                // INICIA CONEXÃO COM SERVIDOR
                conn.Open();
                SqlDataReader dr = com.ExecuteReader();
                Console.Clear();

                // LEITURA DOS DADOS
                while (dr.Read())
                {
                    Console.WriteLine("\nID: " + dr["ID"].ToString());
                    Console.WriteLine("\nNome: " + dr["NOME"].ToString());
                    Console.WriteLine("\nE-mail: " + dr["EMAIL"].ToString());
                    Console.WriteLine("\nCelular: " + dr["CEL"].ToString());
                    Console.WriteLine("\n----------------------------------------------");
                }
                conn.Close();

                // ABRIR NOVA CONEXÃO, PARA MENSAGEM (PARÂMETRO DE SAÍDA)
                conn.Open();
                com.ExecuteNonQuery();

                string mensagem = com.Parameters["@MSG"].Value.ToString();
                //string mensagem = com.Parameters["@MSG"].Value.ToString();

                if (mensagem != "")
                {
                    Console.WriteLine("\n" + mensagem);
                }
                Console.ReadLine();
                conn.Close();

            }
            catch (Exception ex)
            {
                Console.WriteLine("Erro" + ex);
                Console.ReadLine();
            }
        }
    }
}
