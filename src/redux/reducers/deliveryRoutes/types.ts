export type IDeliveryPoint = {
  id: string;
  name: string;
};

export type IDeliveryRoute = {
  from: IDeliveryPoint['id'];
  to: IDeliveryPoint['id'];
  weight: number;
};

export type IDeliveryRoutesState = {
  points: {
    [id: string]: IDeliveryPoint;
  };
  routes: {
    [id: string]: IDeliveryRoute;
  };
};
