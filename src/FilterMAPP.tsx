import React from 'react';
import type { FilterDataIn, FilterDataLoad, FilterDataOut } from './types';
//SCREEN
import ButtonScreen from './screens/ButtonScreen';

type Props = {
  dataIn: FilterDataIn;
  dataLoad: FilterDataLoad;
  dataOut: FilterDataOut;
};

const FilterMAPP = ({ dataIn, dataLoad, dataOut }: Props) => {
  return <ButtonScreen dataIn={dataIn} dataLoad={dataLoad} dataOut={dataOut} />;
};

export default FilterMAPP;
