import React, {
  ChangeEvent,
  FC,
  HTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  Container,
  CustomSelect,
  NativeSelect,
  NativeOption,
  Value,
  Indicator,
  ArrowIcon,
} from './styled';

type IOption = {
  id: string;
  name: string;
};

type ISelectProps = {
  value: IOption['id'] | null;
  options: IOption[];
  onChange: (value: IOption['id'] | null, option: IOption) => void;
} & Omit<HTMLAttributes<HTMLSelectElement>, 'onChange'>;

const Select: FC<ISelectProps> = props => {
  const { value, options, onChange } = props;

  const [optionsMap, setOptionsMap] = useState<{
    [optionId: string]: ISelectProps['options'][number];
  }>({});

  useEffect(() => {
    const newOptionsMap = options.reduce<{
      [prop: string]: IOption;
    }>((result, option) => ({
      ...result,
      [option.id]: option,
    }), {});

    setOptionsMap(newOptionsMap);
  }, [options]);

  const onSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const option = optionsMap[e.target.value];

    onChange(e.target.value || null, option || null);
  }, [optionsMap, onChange]);

  const selectedOption = optionsMap[value || ''];

  return (
    <Container>
      <NativeSelect
        value={value !== null ? value : undefined}
        onChange={onSelect}
      >
        {options.map((option) => (
          <NativeOption
            key={option.id}
            value={option.id}
          >
            {option.name}
          </NativeOption>
        ))}
      </NativeSelect>
      <CustomSelect>
        <Value>
          {selectedOption ? selectedOption.name : null}
        </Value>
        <Indicator>
          <ArrowIcon name="arrowDown" />
        </Indicator>
      </CustomSelect>
    </Container>
  );
};

export default Select;
