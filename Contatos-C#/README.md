T-SQL:
No repositório "sql" possuem os comandos para criar as Stored Procedures necessárias para rodar a aplicação com êxito.

- Abra o seu shell e execute o comando a seguir:
sqlcmd -S "localhost" -U SeuLoginSql -P SUaSenha -Q "CREATE DATABASE DBProva"

- Abra o MSSQL, press: Ctrl + O para abrir um novo arquivo. Busque o repositório sql e abra o arquivo para criar a tabela. Feito isso, pressione a tecla "F5" para executar a query.
Obs: Verifique se o banco de dados corresponde ao desejado.

Faça o mesmo para todos os arquivos seguintes.


Visual Studio:
Abra seu visual, na barra de ferramentas, clique em "View", depois em "Server Explorer".
Na nova janela, clique em "Connect To Database". Adicione o nome do servidor e o banco desejado logo abaixo.
Quanto a autenticação, mude para o SQL Server Authentication se poussior Login e Senha no SQL Server.

Por fim, na conexão aberta, clique em propriedades e copie a string de conexão. Feito isso, busque no código todos os SqlConnection e mude a string do parâmetro, colq a string que você copiou. Apenas dentro das aspas, deixe o @.


Rode o código :)
