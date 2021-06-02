//faça um programa para cadastar disciplinas para uma instituição, que solicite nome da disciplina, carga horaria, horas por aula, total de alunos matriculados e dados dos alunos
// como: nome, notas, frequencia e calcular a media desse aluno e ao final possibiitar a cosulta dos alunos matriculados e sua situação academica.

#include <stdio.h>

void main()

{
  char curso[40][100];                       //declaração de variaveis 
  int I = (1);
  int i = (1);
  int op = (4);
  while (op == 4) {                       // inicialização do programa
    printf ("Digite '1' para nova disciplina.\n");
    printf ("Digite '2' para ver disciplina específica.\n");
    printf ("Digite '0' para finalizar.");
    scanf ("%d",&op);
    if (op == 2) {
  char nome[30][100];
  int alunos,hc[100],ha[100],dp[100];
  float fr[100],n1[100],n2[100],n3[100],m[100];
    printf ("Número da disciplina:");
    scanf ("%s",&I);
      op = (1);
        while ((op == 1) || (op == 2) || (op == 3)) {           //laço de repetiçao para exibir a escolha de funcionalidade 
          printf ("Digite '1' para exibir tabela de alunos matriculados.\n");
          printf ("Digite '2' para seleção de aluno específico.\n");
          printf ("Digite '3' para exibir o histórico de todos os alunos matriculados.\n");
          printf ("Digite '4' para finalizar.\n");
          scanf ("%d",&op);
          if (op == 4) { // condicionl para terminar uma disciplina
            ("\n\n");
          }
          if (op == 1) {             //condicionl para exibir tabelas de alunos
            i = (1);
            while (i <= alunos) { 
              printf ("\n\nAluno %d\n",i);
              printf ("Nome: %s\n\n",nome[i]);
              i++;
            }
          }
          if (op == 2) {             //condicionl para exibir historico de aluno especifico
            printf ("\n\nDigite o número do aluno: ");
            scanf ("%d",&i);
            printf ("\nAluno %d\n",i);
            printf ("Nome: %s\n",nome[i]);
            printf ("Dias presentes: %d\n",dp[i]);
            printf ("Frequencia: %.1f\n",fr[i]);
            printf ("Media: %.1f\n",m[i]);
            printf ("Nota 1: %.1f\n",n1[i]);
            printf ("Nota 2: %.1f\n",n2[i]);
            printf ("Nota 3: %.1f\n\n",n3[i]);
          }
          if (op == 3) {
            i = (1);
            while (i <= alunos) {       //condicionl para exibir historico de todos os alunos
              printf ("\n\nAluno %d\n",i);
              printf ("Nome: %s\n",nome[i]);
              printf ("Dias presentes: %d\n",dp[i]);
              printf ("Frequencia: %.1f\n",fr[i]);
              printf ("Media: %.1f\n",m[i]);
              printf ("Nota 1: %.1f\n",n1[i]);
              printf ("Nota 2: %.1f\n",n2[i]);
              printf ("Nota 3: %.1f\n\n",n3[i]);
              i++;
            }
          }
        }
    }
    if (op == 1) {
      while (op == 1) {                   // laço de repetção para cadrasto de disciplina
        char nome[30][100];
        int alunos,hc[100],ha[100],dp[100];
        float fr[100],n1[100],n2[100],n3[100],m[100];
        i = (1);
        printf ("\n\nDisciplina: %d.\n",I);
        printf ("Nome: ");
        scanf ("%s",&curso[I]);
        printf ("\nTotal de horas da disciplina: ");
        scanf ("%d",&hc[I]);
        printf ("\nHoras por aula: ");
        scanf ("%d",&ha[I]);
        printf ("\nAlunos matriculados: ");
        scanf ("%d",&alunos);
        while (i <= alunos) {                 //laço de repetição para inserir os dados dos alunos 
          printf ("\n\nAluno %d",i);
          printf ("\nNome do aluno: ");
          scanf ("%s",&nome[i]);
          printf ("\nDias presentes: ");
          scanf ("%d",&dp[i]);
          fr[i] = (dp[i] * ha[I]);
          fr[i] = ((fr[i] * 100)/hc[I]);
          if (fr[i] < 75) {                 //condiçao para reprovar por frequencia 
            printf ("\nAluno reprovado!");
            printf ("Frequencia: %.1f\n\n",fr[i]);
            i++;
          }
          if (fr[i] >= 75) {                 // se for aprovado por frequencia, recebe as notas
            printf ("\n\nPrimeira avaliacao: ");
            scanf ("%f",&n1[i]);
            printf ("\nSegunda avaliacao: ");
            scanf ("%f",&n2[i]);
            printf ("\nTerceira avaliacao: ");
            scanf ("%f",&n3[i]);
            m[i] = ((n1[i] + n2[i] + n3[i]) / 3);
            if (m[i] < 5) {               // conseito para aprovação
              printf ("\nProva substitutiva.\n");
              printf ("Frequencia: %.1f\n",fr[i]);
              printf ("Media: %.1f\n\n",m[i]);
              i++;
            }
            if ((m[i] >= 5) && (m[i] < 7)) {
              printf ("\nAprovado com conceito 'Regular'.\n");
              printf ("Frequencia : %.1f\n",fr[i]);
              printf ("Media: %.1f\n\n",m[i]);
              i++;
            }
            if ((m[i] >= 7) && (m[i] < 9)) {
              printf ("\nAprovado com conceito 'Bom'.\n");
              printf ("Frequencia: %.1f\n",fr[i]);
              printf ("Media: %.1f\n\n",m[i]);
              i++;
            }
            if (m[i] >= 9) {
              printf ("\nAprovado com conceito 'Excelente'\n");
              printf ("Frequencia: %.1f\n",fr[i]);
              printf ("Media: %.1f\n\n",m[i]);
              i++;
            }
          }
        }
        op = (1);
        while ((op == 1) || (op == 2) || (op == 3)) {           //laço de repetiçao para exibir a escolha de funcionalidade 
          printf ("Digite '1' para exibir tabela de alunos matriculados.\n");
          printf ("Digite '2' para seleção de aluno específico.\n");
          printf ("Digite '3' para exibir o histórico de todos os alunos matriculados.\n");
          printf ("Digite '4' para finalizar.\n");
          scanf ("%d",&op);
          if (op == 4) { // condicionl para terminar uma disciplina
            I++;
            ("\n\n");
          }
          if (op == 1) {             //condicionl para exibir tabelas de alunos
            i = (1);
            while (i <= alunos) { 
              printf ("\n\nAluno %d\n",i);
              printf ("Nome: %s\n\n",nome[i]);
              i++;
            }
          }
          if (op == 2) {             //condicionl para exibir historico de aluno especifico
            printf ("\n\nDigite o número do aluno: ");
            scanf ("%d",&i);
            printf ("\nAluno %d\n",i);
            printf ("Nome: %s\n",nome[i]);
            printf ("Dias presentes: %d\n",dp[i]);
            printf ("Frequencia: %.1f\n",fr[i]);
            printf ("Media: %.1f\n",m[i]);
            printf ("Nota 1: %.1f\n",n1[i]);
            printf ("Nota 2: %.1f\n",n2[i]);
            printf ("Nota 3: %.1f\n\n",n3[i]);
          }
          if (op == 3) {
            i = (1);
            while (i <= alunos) {       //condicionl para exibir historico de todos os alunos
              printf ("\n\nAluno %d\n",i);
              printf ("Nome: %s\n",nome[i]);
              printf ("Dias presentes: %d\n",dp[i]);
              printf ("Frequencia: %.1f\n",fr[i]);
              printf ("Media: %.1f\n",m[i]);
              printf ("Nota 1: %.1f\n",n1[i]);
              printf ("Nota 2: %.1f\n",n2[i]);
              printf ("Nota 3: %.1f\n\n",n3[i]);
              i++;
            }
          }
        }
      }
    }
  }
  system ("pause");
}
