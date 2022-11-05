
import * as S from "./style";

const EdirtarUsuarios = () => {
  return (
    <S.EditUser>
      <>
        <S.EditUserDetails>
          <S.EditUserDetailsImageWrap>
            <S.EditUserDetailsImage src="" alt="Foto de..." />
          </S.EditUserDetailsImageWrap>
          <S.EditUserDetailsTitle>Nome</S.EditUserDetailsTitle>
          <S.EditUserDetailsText>
            <b>usuário: </b> 
          </S.EditUserDetailsText>
        </S.EditUserDetails>

        <S.EditUserAction>Editar</S.EditUserAction>
      </>
      <S.EditFormGroup>
        <S.EditForm type="text" placeholder="Nome" />
        <S.EditForm type="text" placeholder="Sobrenome de usuário" />
        <S.EditForm type="text" placeholder="Email" />
        <S.EditForm type="text" placeholder="Digite sua Senha" />
        <S.EditForm type="text" placeholder="Digite seu Cpf" />
        <S.EditForm type="text" placeholder="IsAdmin" />
        <S.EditForm type="Url" placeholder="Imagem Url" />
        <S.Delete>Deletar</S.Delete>
      </S.EditFormGroup>
    </S.EditUser>
  );
};

export default EdirtarUsuarios;
