# Função pra limpar o terminal
import os
os.system('clear') or None

m2 = input("Metros quadrados: ") # Recebe a medida
lata = 1 # Quantidade lata
litros = 18 * 3 #Litros * Metros por litro (O que dá pra pintar)

while (litros < float(m2)): # O que dá pra pintar / O que é necessário pintar (Se for menor, adiciona mais uma lata)
    lata = lata + 1
    litros = litros + litros

total = lata * 80

if(lata < 2):
    print(f'\n{lata} lata')
else:
    print(f'\n{lata} latas')

print(f'R$: {total}\n')