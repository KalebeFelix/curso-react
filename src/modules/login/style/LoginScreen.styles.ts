import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #cbcce8, #5429ff);
`;
export const Container = styled.div`
  width: 80vw;
  height: 90vh;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
`;

export const Aside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33rem;
`;

export const AsideImg = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  border-radius: 2rem;
`;

export const ImgDrip = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
