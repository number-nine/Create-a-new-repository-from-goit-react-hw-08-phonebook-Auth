import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  /* row-gap: 4px; */
  align-items: flex-start;
`;

export const ButtonStyled = styled.button`
  padding: 8px;
  margin-top: 16px;
  margin-right: auto;

  background-color: #008cba;
  color: #ffffff;

  border: none;
  border-radius: 4px;
  outline: none;

  cursor: pointer;

  &:hover {
    background-color: #095872;
  }
`;

export const LabelStyled = styled.label`
  padding: 2px;
  color: #008cba;
  text-decoration: none;
`;
