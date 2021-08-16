using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Contatos
    {
        public string[] nome { get; set; } = new string[20];
        public string[] email { get; set; } = new string[20];
        public string[] cel { get; set; } = new string[20];

        public Contatos(int contn)
        {
            this.nome[contn] = string.Empty;
            this.email[contn] = string.Empty;
            this.cel[contn] = string.Empty;
        }

        public string setNome(int contn, string newNome)
        {
            this.nome[contn] = newNome;

            return this.nome[contn];
        }

        public string setEmail(int contn, string newEmail)
        {
            this.email[contn] = newEmail;

            return this.email[contn];
        }

        public string setCel(int contn, string newCel)
        {
            this.cel[contn] = newCel;

            return this.cel[contn];
        }

        public string getNome(int contn)
        {
            return this.nome[contn];
        }

        public string getEmail(int contn)
        {
            return this.email[contn];
        }

        public string getCel(int contn)
        {
            return this.cel[contn];
        }
    }
}
