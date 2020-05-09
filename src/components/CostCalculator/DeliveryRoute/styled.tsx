import styled, { css } from 'styled-components';
import BaseArrowLine from '../ArrowLine';
import BaseSeparateIcon from '../SeparateIcon';

export const ArrowLine = styled(BaseArrowLine)`
  flex: 1;
`;

export const LeftArrowLine = styled(ArrowLine)``;

export const RightArrowLine = styled(ArrowLine)`
  display: none;
`;

export const SeparateIcon = styled(BaseSeparateIcon)`
  display: none;
`;

export const Container = styled.div<{
  canBeSeparated?: boolean;
}>`
  align-items: center;
  display: flex;
  position: relative;

  ${({ canBeSeparated }) => canBeSeparated && css`
    &:hover {
      cursor: pointer;

      ${SeparateIcon} {
        display: flex;
      }

      ${RightArrowLine} {
        display: block;
      } 
    }
  `}
`;
