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
  return <ButtonScreen DataIn={dataIn} DataLoad={dataLoad} DataOut={dataOut} />;
};

export default FilterMAPP;
