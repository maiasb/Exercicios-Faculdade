import os
os.system('clear') or None

n1 = int(input("Digite um numero: "))
n2 = int(input("Digite outro numero: "))
print("\n")

if(n1 == n2 or n2 == n1):
    print("Sao iguais.\n")
elif(n1 > n2):
    print(f'maior numero: {n1}\n')
else:
    print(f'maior numero: {n2}\n')