import styled from "styled-components";

export const Title = styled.h1`
  color: black;
  margin-block-end: 1rem;
  font-size: 3rem;
`;
export const ImgLogo= styled.img`
  width: 5%;
  height: 5%;
`;
export const Pagina = styled.div`
  background-color: #008000;
 
`;
export const Cabecalho = styled.div`
  display: flex;
  align-items: center;

  .space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }
  @media (min-width: 768px) {
    .md\:space-x-10 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(2.5rem * var(--tw-space-x-reverse));
      margin-left: calc(2.5rem * calc(1 - var(--tw-space-x-reverse)));
    }
  }

  ul {
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (min-width: 768px) {
      .md\:flex {
        display: flex;
      }
    }
    .space-x-4 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(1rem * var(--tw-space-x-reverse));
      margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
    }
    li {
      padding: 0 20px;
      cursor: pointer;
      color: white;
      list-style: none;
      padding-left: 0;
      .font-light {
        font-weight: 300;
      }
    }
  }
`;

