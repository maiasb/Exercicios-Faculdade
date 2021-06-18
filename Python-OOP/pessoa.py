class Pessoa:
    def __init__(self, rnome, rcelular, remail):
        self.nome = rnome
        self.celular = rcelular
        self.email = remail

    def setNome(self, dnome):
        self.nome = dnome

    def getNome(self):
        return self.nome

    def setCelular(self, dcelular):
        self.celular = dcelular

    def getCelular(self):
        return self.celular

    def setEmail(self, demail):
        self.email = demail

    def getEmail(self):
        return self.email


novonome = (input("digite o nome"))
novocelular = (input("digite o celular"))
novoemail = (input("digite o email"))

Ismar = Pessoa(novonome, novocelular, novoemail)
print(Ismar.getNome())

novonome2 = (input("digite um novo nome"))
Ismar.setNome(novonome2)
print(Ismar.getNome())
