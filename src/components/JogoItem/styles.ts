import styled from "styled-components";
export const JogoItem1 = styled.div`
  background: blue;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px;
  align-items: center;
  width: 180%;
  margin-left: 2rem;
  position: relative;
  z-index: 1;
  transform: translateY(100px);
  cursor: pointer;
  min-height: 225px;
  max-width: 200px;
  margin-top: 1rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
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
  margin-top: 1px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 80px;
  height: 40px;
  color: white;

  align-items: center;
  font-size: 0.9rem;
  border-radius: .4rem;
`;

export const Imagem = styled.div`
width: 20%;
  
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