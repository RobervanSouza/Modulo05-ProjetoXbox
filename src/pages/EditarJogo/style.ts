import styled, { css } from "styled-components";


export const EditProduct1 = styled.div`

    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    max-width: 200px;
    width: 100%;
    min-height: 225px;
    max-height: 285px;
    padding-top: 10px;
 
    box-sizing: border-box;
  
`;

export const EditProductImage = styled.img`

    width: 130px;
  
`;

export const EditProductDetails = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
  
`;

export const EditProductDetailsName = styled.h3`

    text-align: center;
    max-width: 90%;
    margin: 0;
  
`;

export const EditProductDetailsPrice = styled.strong`

    text-align: center;
    max-width: 90%;
    margin: 0;
  
`;

export const EditProductDetailsDescription = styled.small`

    font-size: 12px;
    text-align: center;
    max-width: 90%;
    margin: 0;
  
`;

export const EditProductAction = styled.div`
 
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
   
    gap: 8px;
    border-radius: 0 0 8px 8px;
    cursor: pointer;
  
`;

export const Delete = styled.button`
 
    width: 172px;
   
  
`;

export const EditFormGroup = styled.div`
  
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
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

const EditFormMixins = {

};

export const EditForm = styled.input<{ error?: boolean; success?: boolean }>`

`;
