
import { jogosResponse } from "components/Api/Jogos";
import { Delete, EditForm, EditFormGroup, EditProduct1, EditProductAction, EditProductDetails, EditProductDetailsDescription, EditProductDetailsName, EditProductDetailsPrice, EditProductImage } from "./style";

interface EditJogoProps{
  product: jogosResponse;
}

const EditJogo = ({product}: EditJogoProps) => {
  return (
    <EditProduct1>
      <>
        <EditProductImage src="" alt="Pizza de..." />
        <EditProductDetails>
          <EditProductDetailsName>Nome do Produto</EditProductDetailsName>
          <EditProductDetailsPrice>R$ 00,00</EditProductDetailsPrice>
          <EditProductDetailsDescription>
            Descrição do Produto
          </EditProductDetailsDescription>
        </EditProductDetails>

        <EditProductAction>
           Editar
        </EditProductAction>
      </>
      <EditFormGroup>
        <EditForm type="text" placeholder="Nome" />
        <EditForm type="text" placeholder="categoria" />
        <EditForm type="text" placeholder="Descrição" />
        <EditForm type="url" placeholder="ImagemUrl" />
        <EditForm type="number" placeholder="Ano" />
        <EditForm type="number" placeholder="Score" />
        <EditForm type="url" placeholder="TreilerUrl" />
        <EditForm type="url" placeholder="GamePlayUrl" />
        <Delete>Deletar</Delete>
      </EditFormGroup>
    </EditProduct1>
  );
};

export default EditJogo;
