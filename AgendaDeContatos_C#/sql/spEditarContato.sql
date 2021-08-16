CREATE PROCEDURE spEditarContato

	@ID INT,
		@NOME VARCHAR (50),
				@EMAIL VARCHAR (50),
						@CEL VARCHAR (50),
								@MSG VARCHAR (50) OUTPUT

AS
BEGIN

	IF EXISTS (SELECT * FROM CONTATOS WHERE EMAIL = @EMAIL)
		BEGIN
			SET @MSG = 'E-mail j� cadastrado.'
		RETURN
	END

	ELSE
		BEGIN
			IF @NOME <> ''
				UPDATE CONTATOS SET NOME = @NOME WHERE ID = @ID

			IF @EMAIL <> ''
				UPDATE CONTATOS SET EMAIL = @EMAIL  WHERE ID = @ID

			IF @CEL <> ''
				UPDATE CONTATOS SET CEL = @CEL WHERE ID = @ID

			IF @NOME = '' AND @EMAIL = '' AND @CEL = ''
				SET @MSG = 'Nenhuma mudan�a realizada.'
			ELSE
				SET @MSG = 'Edi��o conclu�da.'
		RETURN
	END
END