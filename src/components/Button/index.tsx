import React, { ComponentProps, FC } from 'react';
import styled from 'styled-components';

const Container = styled.button`
  background: #fff;
  border: solid 1px #e5e5e5;
  border-radius: 2px;
  color: #222;
  cursor: pointer;
  padding: 5px 10px;

  &:focus {
    border-color: #1e87f0;
  }
  
  &:hover:not(:focus) {
    border-color: #b2b2b2;
  }
`;

type IButtonProps = ComponentProps<typeof Container>;

const Button: FC<IButtonProps> = props => (
  <Container {...props} />
);

export default Button;
