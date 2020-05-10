import styled from 'styled-components';
import Icon from '../Icon';

export const NativeSelect = styled.select`
  bottom: 0;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export const NativeOption = styled.option``;

export const CustomSelect = styled.div`
  align-items: center;
  border: solid 1px #e5e5e5;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 5px 10px;
  width: 100%;
  white-space: nowrap;
`;

export const Value = styled.div`
  color: #666;
`;

export const Indicator = styled.div`
  align-items: center;
  display: flex;
  margin-left: 5px;
`;

export const ArrowIcon = styled(Icon)`
  color: #666;
  height: 10px;
  width: 10px;
`;

export const Container = styled.div`
  display: inline-flex;
  height: 30px;
  min-width: 100px;
  overflow: hidden;
  position: relative;
  
  ${NativeSelect}:focus + ${CustomSelect} {
    border-color: #1e87f0;
  }
`;
