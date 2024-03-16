import styled from "styled-components";

import Button from "../components/Button";
import InputContainer from "../components/InputContainer";

const FormLogin = () => {
  return (
    <ContainerLogin>
      <LoginText>Login</LoginText>
      <Text textAlign="left">
        Please fill your detail to access your account.
      </Text>

      <InputContainer
        label="Email"
        placeholder="Email"
        type="text"
        margin="1.5rem 0"
      />
      <InputContainer
        label="Password"
        placeholder="Password"
        type="password"
        margin="2rem 0"
      />
      <RememberContainer>
        <Remember>
          <input
            type="checkbox"
            style={{ marginRight: "0.25rem", cursor: "pointer" }}
          />
          <Text textAlign="left">Remember me</Text>
        </Remember>
        <Link href="#">Forgot Password?</Link>
      </RememberContainer>

      <ContainerButton>
        <Button type="signIn" />
        <Button type="signGoogle" />
      </ContainerButton>

      <Text textAlign="center">
        Don&apos;t have an account? <Link href="#">Sign up</Link>
      </Text>
    </ContainerLogin>
  );
};

const ContainerLogin = styled.div`
  width: 22.5rem;
  height: 33rem;
  transform: scale(0.9);
`;

const LoginText = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
  color: #344054;
`;

const RememberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
  color: #344054;
`;

const Remember = styled.div`
  display: flex;
  align-self: center;
`;

const Text = styled.div<{ textAlign: string }>`
  font-size: 0.875rem;
  text-align: ${({ textAlign }) => textAlign};
  color: rgba(52, 64, 84, 0.8);
`;

const Link = styled.a`
  color: #5429ff;
  font-weight: medium;
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ContainerButton = styled.div`
  margin: 1.5rem 0;
`;

export default FormLogin;
