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

# INSTANCIANDO O OBJETO
p1 = Ponto(10,10)
p2 = Ponto(20,20)

# PRINTANNDO NA TELA
print(p1.x)
print(p1.y)
print(p2.x)
print(p2.y)

# SETANDO NOVO VALOR NO P1.X
p1.SetX(40)
print(p1.GetX())
print(p1.GetY())

# Adicionando valores nas linhas
linha1 = Linha(0, 0)
linha1.addPonto(1, 1)
linha1.addPonto(2, 2)
linha1.addPonto(3, 3)