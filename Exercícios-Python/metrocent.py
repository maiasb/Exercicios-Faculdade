import os
os.system('clear') or None

#Permite, também, intervalos entre os metros
#(Use o ".", Python não reconhece vírgula para casa decimal).
metros = input("Metros: ")


centimetros = float(metros) * 100

#Limitar a saída de dados para nenhuma casa decimal após o ponto
print(f'\n{metros} metros equivale a {"%.0f" % centimetros} centimetros.\n')