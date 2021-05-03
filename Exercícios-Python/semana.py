import os
os.system('clear') or None

dia = input("Numero do dia: ")

if (dia == "1"):
    print("\nDomingo\n")
elif (dia == "2"):
    print("\nSegunda\n")
elif (dia == "3"):
    print("\nTerca\n")
elif (dia == "4"):
    print("\nQuarta\n")
elif (dia == "5"):
    print("\nQuinta\n")
elif (dia == "6"):
    print("\nSexta\n")
elif (dia == "7"):
    print("\nSabado\n")
else:
    print("\nNumero invalido.\n")