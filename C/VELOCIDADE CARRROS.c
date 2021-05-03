#include <stdio.h>
#include <stdlib.h>

int main()
{
  int d, t, km, m;
  float v;
  
  printf ("Informe a distancia percorrida:\n");
  printf ("Km: ");
  scanf ("%d",&km);
  printf ("\nm: ");
  scanf ("%d",&m);
  printf ("\n\nInforme o tempo do percurso em horas: ");
  scanf ("%d",&t);
  d = ((km * 1000) + m);
  v = (d / t);
  printf ("\n\n");
  if (v > 110)
    {
      printf ("Velocidade: %.fkm/h.\nAcima de 110km/h.",v);
    }
  if (v < 110)
    {
      printf ("Velocidade: %.fkm/h.\nAbaixo de 110km/h.",v);
    }
  
  return (0);
}
