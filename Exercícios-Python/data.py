# Obs: CÓDIGO AINDA PERMITE LETRAS E CARACTERES

# FUNÇÃO PARA LIMPAR CONSOLE
def limpar():
    import os
    os.system('clear') or None


# LAÇO PARA REPETIR O CÓDIGO (SE FOR A VONTADE DO USUÁRIO)
def laco(I):
    import os
    while(I != 0):
        print("Digite 1 para nova data.")
        print("Digite 0 para finalizar")
        I = int(input())
        if(I == 1):
            limpar()
            coletardata()
        elif(I != 1 and I != 0):
            limpar()
            print("Comando invalido.\n")
        else:
            limpar()
            print("\nObrigado!\n")


# FUNÇÃO PARA VALIDAR A DIGITAÇÃO DO USUÁRIO
def coletardata():
    dia = input("Dia:  ")
    while(len(dia) < 2 or len(dia) > 2 or int(dia) > 31 or dia == "00"):
        limpar()
        print("Informe uma dia valido.")

        if(len(dia) <2):
            print("Ex: '02'\n")

        dia = input("Dia: ")

    limpar()

    mes = input(f'{dia}/')
    while(len(mes) < 2 or len(mes) > 2 or int(mes) > 12 or mes == "00"):
        limpar()
        print("Informe uma mes valido.")

        if(len(mes) <2):
            print("Ex: '02'\n")

        mes = input(f'{dia}/')

    limpar()

    ano = input(f'{dia}/{mes}/')
    while(len(ano) < 4 or len(ano) > 4 or ano == "0000"):
        limpar()
        print("Informe um ano valido.")
        print("Ex: '1998'\n")
        ano = input(f'{dia}/{mes}/')

    validardata(dia, mes, ano)


# FUNÇÃO PARA VALIDAR DATA DIGITADA
def validardata(dia, mes, ano):
    # VALIDAÇÃO ENTRE OS MESES E QUANTOS DIAS ESTE POSSUI
    if(mes == "01" and int(dia) > 31):
        print("\nData invalida.")
        print("Verifique quantos dias possui este mes.\n")
        return None
    elif(mes == "02" and int(dia) > 29):
        print("\nData invalida.")
        print("Verifique quantos dias possui este mes.\n")
        return None
    elif(mes == '03' and int(dia) > 31):
        print("\nData invalida.")
        print("Verifique quantos dias possui este mes.\n")
        return None
    elif(mes == '04' and int(dia) > 30):
        print("\nData invalida.")
        print("Verifique quantos dias possui este mes.\n")
        return None
    elif(mes == '05' and int(dia) > 31):
        print("\nData invalida.")
        print("Verifique quantos dias possui este mes.\n")
        return None
    elif(mes == '06' and int(dia) > 30):
        print("\nData invalida.\n")
        print("Verifique quantos dias possui este mes.\n")
        return None
    elif(mes == '07' and int(dia) > 31):
        print("\nData invalida.")
        print("Verifique quantos dias possui este mes.\n")
        return None
    elif(mes == '08' and int(dia) > 31):
        print("\nData invalida.")
        print("Verifique quantos dias possui este mes.\n")
        return None
    elif(mes == '09' and int(dia) > 30):
        print("\nData invalida.")
        print("Verifique quantos dias possui este mes.\n")
        return None
    elif(mes == '10' and int( dia) > 31):
        print("\nData invalida.")
        print("Verifique quantos dias possui este mes.\n")
        return None
    elif(mes == '11' and int( dia) > 30):
        print("\nData invalida.")
        print("Verifique quantos dias possui este mes.\n")
        return None
    elif(mes == '12' and int( dia) > 31):
        print("\nData invalida.")
        print("Verifique quantos dias possui este mes.\n")
        return None
    else:
        # CONVERSÃO PARA EXTENSO EM NOVA VARIÁVEL, POIS OPTEI MOSTRAR AS DUAS FORMAS
        if(mes == "01"):
            nome = "Janeiro"
        if(mes == "02"):
            nome = "Fevereiro"
        if(mes == "03"):
            nome = "Marco"
        if(mes == "04"):
            nome = "Abril"
        if(mes == "05"):
            nome = "Maio"
        if(mes == "06"):
            nome = "Junho"
        if(mes == "07"):
            nome = "Julho"
        if(mes == "08"):
            nome = "Agosto"
        if(mes == "09"):
            nome = "Setembro"
        if(mes == "10"):
            nome = "Outubro"
        if(mes == "11"):
            nome = "Novembro"
        if(mes == "12"):
            nome = "Dezembro"

        # RESULTADO
        limpar()
        # SEPARADO POR BARRAS
        print(f'{dia}/{mes}/{ano}')
        # EXTENSO
        print(f'\n{dia} de {nome} de {ano}\n')


# INÍCIO DO CÓDIGO
limpar()
I = 1
laco(I)