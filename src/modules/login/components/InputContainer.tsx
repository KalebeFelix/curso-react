import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styled from "styled-components";

type InputContainerProps = {
  label: string;
  placeholder: string;
  type: "text" | "password";
  margin: string;
};

export default function InputContainer({
  label,
  placeholder,
  type,
  margin,
}: InputContainerProps) {
  if (type === "password") {
    const [visible, setVisible] = useState(false);
    return (
      <ContainerInput margin={margin}>
        <Label>{label}</Label>
        <Container>
          <InputPassword
            type={visible ? "text" : "password"}
            placeholder={placeholder}
          />
          <Icon onClick={() => setVisible(!visible)}>
            {visible ? <MdVisibility /> : <MdVisibilityOff />}
          </Icon>
        </Container>
      </ContainerInput>
    );
  } else {
    return (
      <ContainerInput margin={margin}>
        <Label>{label}</Label>
        <Input type={type} placeholder={placeholder} />
      </ContainerInput>
    );
  }
}

const ContainerInput = styled.div<{ margin: string }>`
  margin: ${(props) => props.margin};
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.02rem;
  margin-bottom: 10rem;
  color: #344054;
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid #d0d5dd;
  padding: 0 0.875rem;
  margin-top: 0.5rem;
  color: rgba(52, 64, 84, 0.8);
  font-size: 0.875rem;
  &:focus {
    outline: none;
    border: 2px solid rgba(84, 41, 255, 0.8);
  }
  &::placeholder {
    font-size: 0.875rem;
    font-weight: lighter;
    color: rgba(52, 64, 84, 0.7);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 2.5rem;
  position: relative;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  :focus {
    outline: none;
    border: 2px solid rgba(84, 41, 255, 0.8);
  }
`;

const InputPassword = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid #d0d5dd;
  padding: 0 2rem 0 0.875rem;
  color: rgba(52, 64, 84, 0.8);
  font-size: 0.875rem;
  outline: none;
  &::placeholder {
    font-size: 0.875rem;
    font-weight: normal;
    color: rgba(52, 64, 84, 0.7);
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 30%;
  cursor: pointer;
`;
