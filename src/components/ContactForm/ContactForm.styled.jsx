import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid orange;
  border-radius: 5px;
`;

export const FormInput = styled(TextField)(() => ({
  width: '300px',
  margin: '0 auto',
}));

export const FormSubmit = styled.button`
  font-size: 1rem;
  padding: 10px 0;
  margin: 0 auto;
  margin-top: 40px;
  background-color: orange;
  width: 300px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const Format = styled.p`
  font-size: 14px;
  width: 300px;
  margin: 0 auto;
`;
