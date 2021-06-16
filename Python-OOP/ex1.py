class Ponto:
    # CONSRUTOR DA CLASSE
    def __init__(self, coordX, coordY):
        self.x = coordX
        self.y = coordY

    # MÉTODOS PARA SETAR NOVOS VALOES
    def SetX(self, novoX):
        self.x = novoX

    def SetY(self, novoy):
        self.y = novoy

    def GetX(self):
        return self.x

    def GetY(self):
        return self.y


class Linha(Ponto):
    def __init__(self, coordx, coordy):
        super().__init__(coordx, coordy)
        self.__linha = []

    def addPonto(self, x, y):
        ponto = Ponto(x, y)
        self.__linha.append(ponto)


# RECEBE AS COORDENADAS INICIAIS
xp = int(input("Insira a coordenada X: "))
yp = int(input("Insira a coordenada Y: "))

# INSTANCIANDO O OBJETO
p1 = Ponto(xp, yp)
print(f'A coordenada x é: {p1.GetX()}')
print(f'A coordenada y é: {p1.GetY()}')

# RECEBE AS NOVAS COORDENADAS
novoxp = int(input("Insira uma nova coordenada X: "))
novoyp = int(input("Insira uma nova coordenada Y: "))
# SETANDO NOVO VALOR NO P1.X
p1.SetX(novoxp)
p1.SetY(novoyp)
print(f'A coordenada x agora se tornou: {p1.GetX()}')
print(f'A coordenada y agora se tornou: {p1.GetY()}')

# Adicionando valores nas linhas
linha1 = Linha(0, 0)
linha1.addPonto(1, 1)
linha1.addPonto(2, 2)
linha1.addPonto(3, 3)
