#include <stdio.h>
void main()
{
  int op = (1);
  float acm = (0);
  float numero,resultado;
  
  while (op == 1)
    {
    printf ("Numero: ");
    scanf ("%f",&numero);
    acm = (acm + numero);
    printf ("1: somar.\n");
    printf ("2: subtrair.\n");
    printf ("3: multiplicar.\n");
    printf ("4: dividir.\n");
    printf ("0: resultado.\n");
    scanf ("%d",&op);
    if (op == 0)
      {
      printf ("%.1f",acm);
      }
    while (op == 2)
      {
      printf ("Numero: ");
      scanf ("%f",&numero);
      acm = (acm - numero);
      printf ("1: somar.\n");
      printf ("2: subtrair.\n");
      printf ("3: multiplicar.\n");
      printf ("4: dividir.\n");
      printf ("0: resultado.\n");
      scanf ("%d",&op);
      if (op == 0)
        {
        printf ("%.1f",acm);
        }
      }
    while (op == 3)
      {
      printf ("Numero: ");
      scanf ("%f",&numero);
      acm = (acm * numero);
      printf ("1: somar.\n");
      printf ("2: subtrair.\n");
      printf ("3: multiplicar.\n");
      printf ("4: dividir.\n");
      printf ("0: resultado.\n");
      scanf ("%d",&op);
      if (op == 0)
        {
        printf ("%.1f",acm);
        } 
      }
    while (op == 4)
      {
      printf ("Numero: ");
      scanf ("%f",&numero);
      acm = (acm / numero);
      printf ("1: somar.\n");
      printf ("2: subtrair.\n");
      printf ("3: multiplicar.\n");
      printf ("4: dividir.\n");
      printf ("0: resultado.\n");
      scanf ("%d",&op);
      if (op == 0)
        {
        printf ("%.1f",acm);
        }
      }
    }
  
  system ("pause");
}
