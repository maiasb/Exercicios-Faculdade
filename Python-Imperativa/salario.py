import os
os.system('clear') or None

# (Use o ".", Python não reconhece vírgula para casa decimal).
valorhora = float(input("Valor por hora: R$ "))

horasmes = int(input("Horas trabalhadas no mes: "))

salario = valorhora * horasmes

# Limitar a saída de dados para duas casas decimais após o ponto
print(f'\nR$: {"%.2f" % salario}\n')
