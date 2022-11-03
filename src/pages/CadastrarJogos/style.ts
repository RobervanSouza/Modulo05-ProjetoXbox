import styled, { css } from "styled-components";



export const ManageProducts1 = styled.section`
  padding: 20px;
  background-image: url(https://thumbs.dreamstime.com/b/logotipo-da-s%C3%A9rie-xbox-brilha-ao-redor-do-bot%C3%A3o-joystick-no-fundo-escuro-182098188.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const ManageProductsTitle = styled.h1`


    font-size: 20px;
    margin: 0;
  
`;

export const ManageProductsSub = styled.h2`
 
    margin: 25px 0 0 0;
 
    padding-bottom: 10px;
    b {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -13px;
        width: 100%;
        height: 4px;
       
        border-radius: 5rem;
      }
    }
  
`;

export const ManageProductsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 15px;
  margin-left: 23rem;
  height: 400px;
  width: 400px;

  padding-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  overflow: auto;
  background-image: url(https://cdn.ome.lt/mjXY5CgfcVT33OC_XK7fmNbSWyg=/770x0/smart/uploads/conteudo/fotos/xbox-series-x_mD4G4wt.jpg);
 
`;

export const ManageProductsContentAdd = styled.div`
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    max-height: 285px;
  
    font-weight: 500;
    
    border-radius: 8px;
    gap: 10px;
    cursor: pointer;
  
`;

export const AddCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    max-height: 285px;
    box-sizing: border-box;
    padding: 10px 0;
 
    font-weight: 500;
    
    border-radius: 8px;
    gap: 10px;
    cursor: pointer;
    /* Chrome */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
  
`;

export const ManageProductsActions = styled.div`

    margin-top: 20px;
    display: flex;
    gap: 10px;
  
`;

export const ManageProductsActionsCancel = styled.button`

    width: 172px;

  
`;

export const ManageProductsActionsSave = styled.button`
  
    width: 172px;
  
  
`;


export const EditForm = styled.input<{ error?: boolean; success?: boolean }>`

  
`;















/*
export const Cadastrar1 = styled.button`
  margin-left: 1rem;
  background-color: red;
  margin-right: 10rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background: url(https://cdn.ome.lt/-28hLWPquBK1mfhSLdGB6RxIIoY=/1200x630/smart/extras/conteudos/xbox-game-pass_yuoCKC7.jpg);
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 38px;
  font-weight: 900;
  color: red;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const Teste = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: green;
  }
`;

export const Teste1 = styled.button`
  color: green;
  font-weight: 900;
  background-color: aqua;
`;

*/