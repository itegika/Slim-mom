import LoginForm from "../../client/LoginForm";
import AuthorizedPageContainer from "../../shared/containerPage/AuthorizedPage";

const LoginPage = () => {
  return (
    <AuthorizedPageContainer>
      <LoginForm />
    </AuthorizedPageContainer>
  );
};

export default LoginPage;
