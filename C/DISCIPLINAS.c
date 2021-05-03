#include <stdio.h>

int main()

{
char curso[40][30];
char nome[40][50][30];
int alunos[40],hc[40],ha[40],dp[40][50];
float fr[40][50],n1[40][50],n2[40][50],n3[40][50],m[40][50];
int I = (0);
int i = (1);
int op = (4);
int cd = (0);
while (op == 4)
  {
  printf ("Digite '1' para nova disciplina.\n");
  printf ("Digite '2' para ver disciplinas cadastradas.\n");
  printf ("Digite '3' para ver disciplina especifica.\n");
  printf ("Digite '0' para finalizar.");
  scanf ("%d",&op);
  if ((op == 3) && (cd == 0))
    {
     printf ("\n\nNenhuma disciplina cadastrada!\n\n");
     op = (4);
    }
  if (op == 3)
    {
    printf ("Número da disciplina:");
    scanf ("%d",&I);
    printf ("\nNome: %s.\n",curso[I]);
    printf ("Total de horas: %d.\n",hc[I]);
    printf ("Horas por aula: %d.\n",ha[I]);
    printf ("Alunos matriculados: %d.",alunos[I]);       
    op = (1);
    while ((op == 1) || (op == 2) || (op == 3))
      { 
          printf ("\n\nDigite '1' para exibir tabela de alunos matriculados.\n");
          printf ("Digite '2' para selecao de aluno especifico.\n");
          printf ("Digite '3' para exibir o historico de todos os alunos matriculados.\n");
          printf ("Digite '4' para finalizar.\n");
          scanf ("%d",&op);
          if (op == 1)
        {
              i = (1);
              while (i <= alunos[I])
          { 
                  printf ("\n\nAluno %d\n",i);
                  printf ("Nome: %s\n\n",nome[I][i]);
                  i++;
                }
              }
          if (op == 2)
        {
              printf ("\n\nDigite o número do aluno: ");
              scanf ("%d",&i);
              printf ("\nAluno %d\n",i);
              printf ("Nome: %s\n",nome[I][i]);
              printf ("Dias presentes: %d\n",dp[I][i]);
              printf ("Frequencia: %.1f\n",fr[I][i]);
              printf ("Media: %.1f\n",m[I][i]);
              printf ("Nota 1: %.1f\n",n1[I][i]);
              printf ("Nota 2: %.1f\n",n2[I][i]);
              printf ("Nota 3: %.1f\n\n",n3[I][i]);
              }
          if (op == 3)
        {
              i = (1);
              while (i <= alunos[I])
          {
                  printf ("\n\nAluno %d\n",i);
                  printf ("Nome: %s\n",nome[I][i]);
                  printf ("Dias presentes: %d\n",dp[I][i]);
                  printf ("Frequencia: %.1f\n",fr[I][i]);
                  printf ("Media: %.1f\n",m[I][i]);
                  printf ("Nota 1: %.1f\n",n1[I][i]);
                  printf ("Nota 2: %.1f\n",n2[I][i]);
                  printf ("Nota 3: %.1f\n\n",n3[I][i]);
                  i++;
                }
              }
        }
    }
  if ((op == 2) && (cd == 0))
    {
     printf ("\n\nNenhuma disciplina cadastrada!\n\n");
     op = (4);
    }
  if (op == 2)
    {
     while (I <= cd)
       {
         printf ("Disciplina: %d.\nNome: %s.\n",I,curso[I]);
         printf ("Total de horas: %d.\nHoras por aula: %d.\n",hc[I],ha[I]);
         printf ("Alunos matriculados: %d.\n",alunos[I]);
       }
    }
  if (op == 1)
    {
      i = (1);
      I++;
      cd++;
      printf ("\n\nDisciplina: %d.\n",I);
      printf ("Nome: ");
      scanf ("%s",&curso[I]);
      printf ("\nTotal de horas da disciplina: ");
      scanf ("%d",&hc[I]);
      printf ("\nHoras por aula: ");
      scanf ("%d",&ha[I]);
      printf ("\nAlunos matriculados: ");
      scanf ("%d",&alunos[I]);
      while (i <= alunos[I])
        {
        printf ("\n\nAluno %d",i);
        printf ("\nNome do aluno: ");
        scanf ("%s",&nome[I][i]);
        printf ("\nDias presentes: ");
        scanf ("%d",&dp[I][i]);
        fr[I][i] = (dp[I][i] * ha[I]);
        fr[I][i] = ((fr[I][i] * 100)/hc[I]);
        if (fr[I][i] < 75)
          {
          printf ("\nAluno reprovado!");
          printf ("Frequencia: %.1f\n\n",fr[I][i]);
          i++;
          }
        if (fr[I][i] >= 75)
          {
          printf ("\n\nPrimeira avaliacao: ");
          scanf ("%f",&n1[I][i]);
          printf ("\nSegunda avaliacao: ");
          scanf ("%f",&n2[I][i]);
          printf ("\nTerceira avaliacao: ");
          scanf ("%f",&n3[I][i]);
          m[I][i] = ((n1[I][i] + n2[I][i] + n3[I][i]) / 3);
        if (m[I][i] < 5)
            {
                    printf ("\nProva substitutiva.\n");
                    printf ("Frequencia: %.1f\n",fr[I][i]);
                    printf ("Media: %.1f\n\n",m[I][i]);
                    i++;
                  }
                if ((m[I][i] >= 5) && (m[I][i] < 7))
            {
                    printf ("\nAprovado com conceito 'Regular'.\n");
                    printf ("Frequencia : %.1f\n",fr[I][i]);
                    printf ("Media: %.1f\n\n",m[I][i]);
                    i++;
                  }
                if ((m[I][i] >= 7) && (m[I][i] < 9))
            {
                    printf ("\nAprovado com conceito 'Bom'.\n");
                    printf ("Frequencia: %.1f\n",fr[I][i]);
                    printf ("Media: %.1f\n\n",m[I][i]);
                    i++;
                  }
                if (m[I][i] >= 9)
            {
                    printf ("\nAprovado com conceito 'Excelente'\n");
                    printf ("Frequencia: %.1f\n",fr[I][i]);
                    printf ("Media: %.1f\n\n",m[I][i]);
                    i++;
                  }
                }
            }
      while ((op == 1) || (op == 2) || (op == 3))
      { 
          printf ("Digite '1' para exibir tabela de alunos matriculados.\n");
          printf ("Digite '2' para selecao de aluno especifico.\n");
          printf ("Digite '3' para exibir o historico de todos os alunos matriculados.\n");
          printf ("Digite '4' para finalizar.\n");
          scanf ("%d",&op);
          if (op == 4)
        {
              ("\n");
              }
          if (op == 1)
        {
              i = (1);
              while (i <= alunos[I])
          { 
                  printf ("\n\nAluno %d\n",i);
                  printf ("Nome: %s\n\n",nome[I][i]);
                  i++;
                }
              }
          if (op == 2)
        {
              printf ("\n\nDigite o número do aluno: ");
              scanf ("%d",&i);
              printf ("\nAluno %d\n",i);
              printf ("Nome: %s\n",nome[I][i]);
              printf ("Dias presentes: %d\n",dp[I][i]);
              printf ("Frequencia: %.1f\n",fr[I][i]);
              printf ("Media: %.1f\n",m[I][i]);
              printf ("Nota 1: %.1f\n",n1[I][i]);
              printf ("Nota 2: %.1f\n",n2[I][i]);
              printf ("Nota 3: %.1f\n\n",n3[I][i]);
              }
          if (op == 3)
        {
              i = (1);
              while (i <= alunos[I])
          {
                  printf ("\n\nAluno %d\n",i);
                  printf ("Nome: %s\n",nome[I][i]);
                  printf ("Dias presentes: %d\n",dp[I][i]);
                  printf ("Frequencia: %.1f\n",fr[I][i]);
                  printf ("Media: %.1f\n",m[I][i]);
                  printf ("Nota 1: %.1f\n",n1[I][i]);
                  printf ("Nota 2: %.1f\n",n2[I][i]);
                  printf ("Nota 3: %.1f\n\n",n3[I][i]);
                  i++;
                }
              }
        }
    }
  if (op == 0)
    {
      printf ("\n\nVOLTE SEMPRE!\n\n");
    }
  }
  system ("PAUSE");
  return (0);
}
