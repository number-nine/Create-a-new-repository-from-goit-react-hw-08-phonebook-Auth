import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';

import { FormStyled, ButtonStyled, LabelStyled } from './UserMenu.styled';
import { authApi } from 'redux/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUserName);
  const handleSubmit = e => {
    e.preventDefault();
      dispatch(authApi.logout());

    }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled htmlFor="loginField">Welcome, {currentUser}</LabelStyled>
      <ButtonStyled type="submit">Log out</ButtonStyled>
    </FormStyled>
  );
};

export default UserMenu;
