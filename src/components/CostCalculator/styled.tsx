import styled from 'styled-components';
import BaseDeliveryPoint from './DeliveryPoint';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const RouteWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const DeliveryPoint = styled(BaseDeliveryPoint)``;

export const Subtext = styled.div`
  margin-top: 10px;
  color: #666;
`;
