import RegisterForm from "../../client/RegisterForm";
import AuthorizedPageContainer from "../../shared/containerPage/AuthorizedPage";

const RegisterPage = () => {
  return (
    <AuthorizedPageContainer>
      <RegisterForm />
    </AuthorizedPageContainer>
  );
};

export default RegisterPage;
