import EdirtarUsuarios from "components/EditarUsuarios/EditarUsuario";
import { HTMLAttributes } from "react";
import * as S from "./style";

type ManageUsersType = HTMLAttributes<HTMLDivElement>;

type ManageUsersProps = {} & ManageUsersType;

const Usuarios = ({ ...props }: ManageUsersProps) => {
  return (
    <S.ManageUsers {...props}>
      <S.ManageUsersTitle>Cadastrar Usuários </S.ManageUsersTitle>
      <S.ManageUsersSub>
        <b>Usuários</b>
      </S.ManageUsersSub>
      <S.ManageUsersContent>
        <S.ManageUsersContentAdd>
          <span>Adicionar Usuário</span>
        </S.ManageUsersContentAdd>
        <S.ManageUsersContentAdd>
          <S.EditForm type="text" placeholder="Nome" />
          <S.EditForm type="text" placeholder="Sobrenome de usuário" />
          <S.EditForm type="text" placeholder="Email" />
          <S.EditForm type="text" placeholder="Digite sua Senha" />
          <S.EditForm type="text" placeholder="Digite seu Cpf" />
          <S.EditForm type="text" placeholder="IsAdmin" />
          <S.EditForm type="Url" placeholder="Imagem Url" />
        </S.ManageUsersContentAdd>
        <EdirtarUsuarios />
      </S.ManageUsersContent>
      <S.ManageUsersActions>
        <S.ManageUsersActionsCancel>Cancelar</S.ManageUsersActionsCancel>
        <S.ManageUsersActionsSave>Salvar Mudanças</S.ManageUsersActionsSave>
      </S.ManageUsersActions>
    </S.ManageUsers>
  );
};

export default Usuarios;
