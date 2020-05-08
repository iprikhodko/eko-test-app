import { IDeliveryPoint } from './types';

export const getRouteId = ({ from, to }: {
  from: IDeliveryPoint['id'];
  to: IDeliveryPoint['id'];
}) => `${from}_${to}`;
