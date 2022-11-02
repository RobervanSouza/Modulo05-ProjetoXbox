import styled from "styled-components";



export const ListaJogoHeader = styled.div`
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  
`;

export const ListaJogoTitle = styled.div`
 margin-top: 3rem;

`;

export const ListaJogoSelect = styled.select`
  margin-left: 23rem;
  margin: 0rem 29rem 0rem 3rem;
  justify-content: space-between;
`;

export const ListaJogoTodos = styled.div`
  justify-content: center;
  margin-top: 75px;
  display: flex;
  gap: 75px 20px;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: row;
  justify-content: space-between;
  width: 55rem;
  transform: rotatey(-45px);
  cursor: pointer;
`;
export const Categoria = styled.div`
  margin-left: 23rem;
  flex-direction: column;
 cursor: pointer;
 background-color: red;
`;
export const Button = styled.button`
color: white;
background-color: red;
width: 5rem;
height: 5rem;
display: block ;
border: none;
font-size: 2rem;
cursor: pointer;
flex-direction: column;
`;




export const Teste = styled.div`
margin-top: 2rem;
margin-left: 2rem;
background-color: #90ee90;

`;
