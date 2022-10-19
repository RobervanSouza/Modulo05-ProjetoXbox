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
  margin-left: 2rem;
  margin-top: 3rem;
  cursor: pointer;
  min-height: 225px;
 
`;

export const JogoItemImage = styled.img`
  width: 150px;
  margin-top: 10px;
`;

export const JogoItemName = styled.h3`
  text-align: center;
  max-width: 90%;
  margin: 0;
`;

export const JogoItemAno = styled.strong`
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
export const JogoItemCategoria = styled.small`
  text-align: center;
  max-width: 90%;
  margin: 0;
  font-size: 12px;
`;
export const JogoItemScore = styled.small`
  text-align: center;
  max-width: 90%;
  margin: 0;
  font-size: 12px;
`;
export const JogoItemTreiler = styled.small`
  text-align: center;
  max-width: 90%;
  margin: 0;
  font-size: 12px;
`;
export const JogoItemGamePlay = styled.small`
  text-align: center;
  max-width: 90%;
  margin: 0;
  font-size: 12px;
`;

export const A = styled.a`
  width: 150px;
  margin-top: 10px;
`;

export const Button = styled.button`
  width: 70px;
  height: 40px;
  color: white;
  background-color: #3cb371;
  align-items: center;
  font-size: 0.9rem;
  border-radius: 2rem;
`;
/*
  <JogoItem1>
    <JogoItemImage>imagem</JogoItemImage>
    <JogoItemName> nome do jogo</JogoItemName>
    <JogoItemDescription>descrição</JogoItemDescription>
    <JogoItemCategoria>categoria</JogoItemCategoria>
    <JogoItemAno>ano</JogoItemAno>
    <JogoItemGamePlay>hgjg</JogoItemGamePlay>
    <JogoItemTreiler>treiler</JogoItemTreiler>
    <JogoItemScore>score</JogoItemScore>
  </JogoItem1>;

  */