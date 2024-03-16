import FormLogin from "../components/ContainerLogin";
import * as S from "../style/LoginScreen.styles";

const LoginScreen = () => {
  return (
    <S.Main>
      <S.Container>
        <S.Aside>
          <FormLogin />
        </S.Aside>
        <S.AsideImg>
          <S.ImgDrip src="public\astronaut.svg" />
        </S.AsideImg>
      </S.Container>
    </S.Main>
  );
};

export default LoginScreen;
