import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { FormStyled, ButtonStyled, LabelStyled } from './SignUp.styled';
import { authApi } from 'redux/authOperations';
import { Container } from 'pages/Pages.styled';
import Section from 'components/Section';

const SignUp = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements?.login.value.trim();
    const password = e.target.elements?.password.value.trim();
    const email = e.target.elements?.email.value.trim();

    if (!name || !password || !email) {
      Notify.failure('Enter valid credentials');
      return;
    }
    dispatch(authApi.signup({ email, name, password }));
    e.target.reset();
    return;
  };
  return (
    <Container>
      <Section title="Register">
        <FormStyled onSubmit={handleSubmit}>
          <LabelStyled htmlFor="emailField">Email</LabelStyled>
          <input type="email" name="email" id="emailField" required />
          <LabelStyled htmlFor="loginField">Username</LabelStyled>
          <input type="text" name="login" id="loginField" required />
          <LabelStyled htmlFor="passwordField">Password</LabelStyled>
          <input type="password" name="password" id="passwordField" required />
          <ButtonStyled type="submit">Register</ButtonStyled>
        </FormStyled>
      </Section>
    </Container>
  );
};

export default SignUp;
