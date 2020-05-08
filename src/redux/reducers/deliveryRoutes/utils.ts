import { IDeliveryRoute } from './types';

export const getRouteId = ({ from, to }: Omit<IDeliveryRoute, 'weight'>) => `${from}_${to}`;
