import os
os.system('clear') or None

print("Digite 0 pra finalizar")
x = int(input("Digite um numero entre 1 e 16: "))
y = x
z = x
fatorial = 1
I = 2

# Importa a lib
import os
# Limpa o terminal
os.system('clear') or None

# Laço de repetição enquanto 'x' for diferente de zero
while (x != 0):
    # Condição para número válido
    if(x > 0 and x <= 16):
        # Pra não repetir a string, coloquei fora do 'while'
        os.system('clear') or None
        print(f'Fatoracao de {x}:\n')
        # Escrita dos valores no terminal
        while(x > 0):
            print(x)
            x = x - 1

        while(I <= y):
            fatorial = fatorial * I
            I = I + 1

        print(f'Fatorial de {z} e: {fatorial}')
    else:
        os.system('clear') or None
        print("\nInforme um umero valido.")
    
    print("\nDigite 0 pra finalizar")
    x = int(input("\nDigite um numero entre 1 e 16: "))
    y = x
    z = x
    fatorial = 1
    I = 2