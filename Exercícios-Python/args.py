import os
os.system('clear') or None

def soma(x, y, z):
    soma = x + y + z
    print(f'\n{soma}\n')

x = int(input("Digite um numero: "))
y = int(input("\nDigite outro numero: "))
z = int(input("\nDigite outro numero: "))

soma(x, y , z)