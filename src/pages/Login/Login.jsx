import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { FormStyled, ButtonStyled, LabelStyled } from './Login.styled';
import { authApi } from 'redux/authOperations';
import { Container } from 'pages/Pages.styled';
import Section from 'components/Section/Section';

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
  

    const email = e.target.elements?.email.value.trim();
    const password = e.target.elements?.password.value.trim();

    if (!email || !password) {
      Notify.failure('Enter valid credentials');
      return;
    }
    dispatch(authApi.login({ email, password }));
    e.target.reset();
    return;
  };
  return (
    <Container>
      <Section title='Login'>
        <FormStyled onSubmit={handleSubmit}>
          <LabelStyled htmlFor="loginField">Username</LabelStyled>
          <input type="email" name="email" id="loginField" required />
          <LabelStyled htmlFor="passwordField">Password</LabelStyled>
          <input type="password" name="password" id="passwordField" required />
          <ButtonStyled type="submit">Log In</ButtonStyled>
        </FormStyled>
      </Section>
    </Container>
  );
};

export default Login;
