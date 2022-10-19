import styled from "styled-components";


export const JogoItem1 = styled.div`
    
    background: blue;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    align-items: center;
    max-width: 200px;
    width: 100%;
    cursor: pointer;
    min-height: 225px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
    }
  
`;

export const JogoItemImage = styled.img`
  
    width: 150px;
    margin-top: -50px;
  
`;

export const JogoItemName = styled.h3`

    text-align: center;
    max-width: 90%;
    margin: 0;
  
`;

export const JogoItemPrice = styled.strong`
 
    text-align: center;
    max-width: 90%;
    margin: 0;
   
`;

export const JogoItemDescription = styled.small`

    text-align: center;
    max-width: 90%;
    margin: 0;
    font-size: 12px;
  
`;