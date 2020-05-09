import React, { ComponentProps, PureComponent } from 'react';
import { IDeliveryPoint } from '../../../redux/reducers/deliveryRoutes/types';
import BaseSelect from '../../Select';
import BaseDeliveryRoute from '../DeliveryRoute';
import {
  Container,
  SelectWrapper,
  Select,
  RemoveIcon,
  DeliveryRoute,
} from './styled';

type IDeliveryPointProps = {
  pointId: IDeliveryPoint['id'] | null;
  points: IDeliveryPoint[];
  weight: number;
  order: number;
  isRouteShown?: boolean;
  isRemovable?: boolean;
  canBeSeparated?: boolean;
  onChange: (args: {
    pointId: string | number | null;
    order: number;
  }) => void;
  onInsert: (args: {
    order: number;
  }) => void;
  onRemove: (args: {
    order: number;
  }) => void;
};

class DeliveryPoint extends PureComponent<IDeliveryPointProps> {
  onChange: ComponentProps<typeof BaseSelect>['onChange'] = pointId => {
    const { order } = this.props;

    this.props.onChange({
      pointId,
      order,
    });
  };

  onInsert: ComponentProps<typeof BaseDeliveryRoute>['onPointAdd'] = order =>
    this.props.onInsert({ order });

  onRemove = () => {
    const { order } = this.props;

    this.props.onRemove({ order });
  };

  render() {
    const {
      pointId,
      points,
      order,
      isRouteShown,
      isRemovable,
      canBeSeparated,
      onChange,
      onInsert,
      ...otherProps
    } = this.props;

    return (
      <Container {...otherProps}>
        {isRouteShown && (
          <DeliveryRoute
            order={order}
            canBeSeparated={canBeSeparated}
            onPointAdd={this.onInsert}
          />
        )}
        <SelectWrapper>
          <Select
            value={pointId}
            options={points}
            onChange={this.onChange}
          />
          {isRemovable && (
            <RemoveIcon
              name="cross"
              title="Remove delivery point"
              onClick={this.onRemove}
            />
          )}
        </SelectWrapper>
      </Container>
    );
  }
}

export default DeliveryPoint;