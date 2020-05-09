import styled from 'styled-components';
import Icon from '../../Icon';

export const Container = styled.div`
  height: 20px;
  position: relative;
  width: 200px;
`;

export const Line = styled.div`
  border-top: dashed 1px #f0506e;
  height: 0;
  left: 0;
  position: absolute;
  right: 5px;
  top: calc(50% - 1px);
`;

export const ArrowIcon = styled(Icon).attrs(() => ({ name: 'arrowLineRight' }))`
  color: #f0506e;
  height: 14px;
  right: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
`;
