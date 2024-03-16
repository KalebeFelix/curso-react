import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

type ButtonContainerProps = {
  type: "signIn" | "signGoogle";
};

export default function Button({ type }: ButtonContainerProps) {
  if (type === "signIn") {
    return (
      <ButtonContainer border="none" bg="#5429FF" color="white">
        Sing in
      </ButtonContainer>
    );
  } else {
    return (
      <ButtonContainer border="1px solid #D0D5DD" bg="white" color="#344054">
        <FcGoogle /> Sing in with Google
      </ButtonContainer>
    );
  }
}

const ButtonContainer = styled.button<{
  border: string;
  bg: string;
  color: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  gap: 0.5rem;
  width: 100%;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: ${({ border }) => border};
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 5px 5px rgba(84, 41, 255, 0.3);
  }
`;
