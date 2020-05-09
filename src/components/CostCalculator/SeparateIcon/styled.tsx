import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  height: 20px;
  padding: 0 3px;
  width: 18px;
`;

export const Line = styled.div`
  border: solid 1px #666;
  height: 100%;
  width: 4px;
`;

export const LeftLine = styled(Line)`
  border-left: none;
`;

export const RightLine = styled(Line)`
  border-right: none;
`;
