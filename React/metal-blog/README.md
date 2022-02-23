Para instalar as dependências, execute o comando `yarn`, em ambas as stacks.
Para executar a aplicação, execute o comando `yarn start`, em ambas as stacks.

É necessário adicionar o dotnv nas raizes dos projetos para utilizar as variáveis de ambiente e executar as rotas e configs corretamente.

## Funcionamento:
- É preciso antes de tudo, realizar o login com o google no link `Login`, encontrado no Header.
- O projeto não está guardando os dados em localStorage, portanto, recomenda-se que navegue pelas guias sem recarregar as páginas para o melhor funcionamento.
- O código está enviando email para o usuário que logar a primeira vez. Após isso, para cada comentário enviado nas páginas serão enviados por email, também.
- Na página `About`, estava em andamento o desenvolvimento do carregamento dos comentários para a visualização do usuário logado.
