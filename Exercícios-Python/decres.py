import os
os.system('clear') or None

x = int(input("Digite um numero: "))
y = int(input("Digite outro numero: "))
z = int(input("Digite outro numero: "))
print("\n")

lista = [x, y, z]
lista.sort(reverse=True)

print(f'Ordem decrescente: {lista}')
print("\n")