import { IDeliveryPoint } from '../deliveryRoutes/types';

export type ICostCalculatorPoint = {
  id: string;
  pointId: IDeliveryPoint['id'] | null;
};

export type ICostCalculatorState = {
  ids: ICostCalculatorPoint['id'][],
  data: {
    [id: string]: ICostCalculatorPoint;
  },
};
