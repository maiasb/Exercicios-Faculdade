CREATE PROCEDURE spBuscarContato

	@NOME VARCHAR (50),
	@EMAIL VARCHAR (50),
	@CEL VARCHAR (50),
	@MSG VARCHAR(50) OUTPUT

AS
BEGIN

	IF EXISTS (SELECT * FROM CONTATOS WHERE NOME = @NOME AND EMAIL = @EMAIL AND CEL = @CEL)
	BEGIN
	SELECT * FROM CONTATOS WHERE NOME = @NOME AND EMAIL = @EMAIL AND CEL = @CEL
	RETURN
	END

	ELSE IF EXISTS (SELECT * FROM CONTATOS WHERE NOME = @NOME AND EMAIL = @EMAIL OR NOME = @NOME AND CEL = @CEL OR EMAIL = @EMAIL AND CEL = @CEL)
	BEGIN
	SELECT * FROM CONTATOS WHERE NOME = @NOME AND EMAIL = @EMAIL OR NOME = @NOME AND CEL = @CEL OR EMAIL = @EMAIL AND CEL = @CEL
	RETURN
	END

	ELSE IF EXISTS (SELECT * FROM CONTATOS WHERE NOME = @NOME OR EMAIL = @EMAIL OR CEL = @CEL)
	BEGIN
	SELECT * FROM CONTATOS WHERE NOME = @NOME OR EMAIL = @EMAIL OR CEL = @CEL
	RETURN
	END

	ELSE
	BEGIN
	SET @MSG = 'Contato n�o encontrado.'
	RETURN
	END

END