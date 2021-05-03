print('Hello World!\n')

print("Calculation\n")

x = input("Enter a number\n")
y = input("Enter other number\n")

print("\n")
soma = int(x) + int(y)


import os
os.system('cls') or None


print(f'Result:{soma}')


# IT IS NOT NECESSARY DECLARE VARIABLE TYPE INT, FLOAT AND STRING
num1 = 10
print(num1)
print(f'{type(num1)}\n')

# IS NOT NECESSARY CREATE VARIABLE
print(f'{type(1)}: IS NOT NECESSARY CREATE VARIABLE\n')

num1 = 10 + 5j
print(num1)
print(f'{type(num1)}\n')

num1 = [10, 10 + 5j, 'Dynamic variable']
print(num1)
print(f'{type(num1)}\n')


# ENTER OF VALUES
x = input("Digit here")
print(x)


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('PyCharm')

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
