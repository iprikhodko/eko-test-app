import { connect } from 'react-redux';
import CostCalculator from '../../components/CostCalculator';
import {
  insertDeliveryPoint as onInsert,
  addDeliveryPoint as onAdd,
  changeDeliveryPoint as onChange,
  removeDeliveryPoint as onRemove,
} from '../../redux/reducers/costCalculator/actions';
import { getPointsAsArray } from '../../redux/reducers/deliveryRoutes/selectors';
import {
  getCostCalculatorRoutes,
  getCostCalculatorResult,
  getCostCalculatorError,
} from '../../redux/reducers/selectors';
import { IState } from '../../redux/store';

const mapStateToProps = (state: IState) => ({
  points: getPointsAsArray(state),
  routes: getCostCalculatorRoutes(state),
  result: getCostCalculatorResult(state),
  error: getCostCalculatorError(state),
});

const mapDispatchToProps = {
  onAdd,
  onInsert,
  onChange,
  onRemove,
};

const CostCalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(CostCalculator);

export default CostCalculatorContainer;
