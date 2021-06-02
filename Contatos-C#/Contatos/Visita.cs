using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contatos
{
    public class Visita
    {
        public string nome { get; set; }
        public string email { get; set; }
        public string cel { get; set; }
        public string mensagem { get; set; }

        public Visita()
        {
            this.nome = string.Empty;
            this.email = string.Empty;
            this.cel = string.Empty;
            this.mensagem = string.Empty;
        }
    }
}
