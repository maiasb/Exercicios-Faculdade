#include <stdio.h>

int main()
{
  char c[5];
  int i,I,q,Q;
  i = (1);
  I = (1);
  printf ("Caractere: ");
  scanf ("%s",&c);
  printf ("\nDegraus: ");
  scanf ("%d",&q);
  printf ("\n\n");
  while (i <= q)
    {
      I = (0);
      while (I <= Q)
        {
          printf ("%s",c);
          I++;
        }
      Q++;
      printf ("\n\n");
      i++;
    }
  
  return (0);
}
