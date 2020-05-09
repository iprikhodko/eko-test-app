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

export const Weight = styled.div`
  color: #666;
  display: inline-block;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
`;

export const Container = styled.div<{
  isIncluded?: boolean;
  canBeSeparated?: boolean;
}>`
  align-items: center;
  display: flex;
  position: relative;
  
  ${({ isIncluded }) => isIncluded && css`
    ${ArrowLine} {
      color: #f0506e;
    }
  `}

  ${({ canBeSeparated }) => canBeSeparated && css`
    &:hover {
      cursor: pointer;
      
      ${Weight} {
        display: none;
      }

      ${SeparateIcon} {
        display: flex;
      }

      ${RightArrowLine} {
        display: block;
      } 
    }
  `}
`;
