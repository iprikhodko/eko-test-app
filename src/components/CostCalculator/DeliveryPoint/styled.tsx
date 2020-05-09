import styled from 'styled-components';
import Icon from '../../Icon';
import BaseSelect from '../../Select';
import BaseDeliveryRoute from '../DeliveryRoute';

export const Select = styled(BaseSelect)``;

export const RemoveIcon = styled(Icon)`
  color: #f0506e;
  cursor: pointer;
  display: none;
  height: 8px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 8px;
`;

export const DeliveryRoute = styled(BaseDeliveryRoute)`
  width: 100px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  padding: 10px;
  padding-left: 0;
  
  &:hover ${RemoveIcon} {
    display: block;
  }
`;

export const Container = styled.div`
  display: flex;

  ${DeliveryRoute} + ${SelectWrapper} {
    padding-left: 10px;
  }
`;
