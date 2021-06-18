class Agenda:
    def __init__(self):
        self.__agenda = []
        self.cont = 0

    def addPessoa(self, rnome, rcelular, remail):
        self.pessoa = [f'Id: {self.cont}, 'f'Nome: {rnome}',
                       f'Celular: {rcelular}', remail]
        self.__agenda.append(self.pessoa)
        self.cont = self.cont + 1

    def getPessoa(self, id):
        return self.__agenda[id]

    def getPessoas(self):
        return self.__agenda


def laco(menu):
    while menu != 6:
        limpar()
        menu = (int(input("=======AGENDA=======\n1-Adicionar contato\n2-Editar contato\n3-Excluir contato\n4-Pesquisar contato\n5-Listar contatos\n6-Sair\nEscolha uma opção: ")))
        if menu == 1:
            novaPessoa()
        if menu == 2:
            editarPessoa()
        if menu == 3:
            excluirPessoa()
        if menu == 4:
            buscarPessoa()
        if menu == 5:
            listar()


def novaPessoa():
    limpar()
    novonome = (input("Digite o nome: "))
    novocelular = (input("Digite o celular: "))
    novoemail = (input("Digite o email: "))
    agenda.addPessoa(novonome, novoemail, novocelular)


def editarPessoa():
    limpar()
    print("Finge que editou um contato aqui")
    pause = input()


def excluirPessoa():
    limpar()
    print("Finge que excluiu um contato aqui")
    pause = input()


def buscarPessoa():
    limpar()
    id = int(input("Digite o id do contato:"))
    print(agenda.getPessoa(id))
    pause = input()


def listar():
    limpar()
    print(agenda.getPessoas())
    pause = input()


def limpar():
    import os
    os.system('clear') or None


agenda = Agenda()

I = 1
laco(I)
