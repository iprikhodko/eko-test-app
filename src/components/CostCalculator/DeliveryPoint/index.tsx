import React, { ComponentProps, PureComponent } from 'react';
import { ICostCalculatorPoint } from '../../../redux/reducers/costCalculator/types';
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
  isRouteShown?: boolean;
  canBeSeparated?: boolean;
  routeId?: ICostCalculatorPoint['id'];
  weight?: number | null;
  isRemovable?: boolean;
  onChange?: (args: {
    pointId: ICostCalculatorPoint['pointId'];
    id: ICostCalculatorPoint['id'];
  }) => void;
  onInsert?: (args: {
    nextId: ICostCalculatorPoint['id'];
  }) => void;
  onRemove?: (args: {
    id: ICostCalculatorPoint['id'];
  }) => void;
};

class DeliveryPoint extends PureComponent<IDeliveryPointProps> {
  onChange: ComponentProps<typeof BaseSelect>['onChange'] = pointId => {
    const { routeId = '', onChange } = this.props;

    if (!onChange) {
      return;
    }

    onChange({
      id: routeId,
      pointId,
    });
  };

  onInsert: ComponentProps<typeof BaseDeliveryRoute>['onPointAdd'] = () => {
    const { routeId = '', onInsert } = this.props;

    if (!onInsert) {
      return;
    }

    onInsert({
      nextId: routeId,
    });
  };

  onRemove = () => {
    const { routeId = '', onRemove } = this.props;

    if (!onRemove) {
      return;
    }

    onRemove({ id: routeId });
  };

  render() {
    const {
      routeId,
      pointId,
      points,
      isRouteShown,
      isRemovable,
      canBeSeparated,
      weight,
      onChange,
      onInsert,
      onRemove,
      ...otherProps
    } = this.props;

    return (
      <Container {...otherProps}>
        {isRouteShown && (
          <DeliveryRoute
            weight={weight}
            isIncluded={!!routeId}
            canBeSeparated={canBeSeparated}
            onPointAdd={this.onInsert}
          />
        )}
        <SelectWrapper>
          <Select
            value={pointId}
            options={points}
            isEmptyValueAllowed={!routeId}
            emptyValueText="Select point"
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