import styled from 'styled-components';
import Button from '../Button';
import BaseDeliveryPoint from './DeliveryPoint';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const RouteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const DeliveryPoint = styled(BaseDeliveryPoint)``;

export const ResetButton = styled(Button)`
  margin-left: 10px;
`;

export const Subtext = styled.div<{ isError: boolean }>`
  margin-top: 15px;
  color: ${({ isError }) => isError ? '#f0506e' : '#666'};
`;
