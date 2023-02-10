import _, { filter } from 'lodash';
import { useState } from 'react';
import type { FilterDataIn, FilterDataLoad, FilterDataOut } from 'src/types';

type Props = {
  DataIn?: FilterDataIn;
  DataLoad: FilterDataLoad;
  DataOut: FilterDataOut;
};

type multiSelectType = {
  multiSelect: {
    text: string;
    value: string;
  };
}[];

const useViewModel = ({ DataLoad, DataOut, DataIn }: Props) => {
  const [activeButtonFilter, setActiveButtonFilter] = useState<{
    text: string;
    value: string;
  }>({ text: 'All', value: 'All' });
  const [selected, setSelected] = useState<number[]>([]);
  const [isActive, setIsActive] = useState<number[]>([0]);

  const onPresshandler = ({ item, index }: any) => {
    if (item.text === 'All') {
      console.log('item: ', item.text);
      setSelected([0]);
      DataOut([]);
    } else {
      setIsActive([index]);
      DataOut([item, index]);
    }
  };

  // const isActive = (btn: { text: string; value: string }) => {
  //   return btn.value === activeButtonFilter.value;
  // };

  const handleMultiSelect = (btn: {
    id: number;
    text: string;
    value: string;
  }) => {
    if (selected.includes(btn.id)) {
      setSelected(selected.filter(id => id !== btn.id));
    } else {
      setSelected([...selected, btn.id]);
    }
    console.log('selected: ', selected);
  };

  return {
    setActiveButtonFilter,
    isActive,
    handleMultiSelect,
    setSelected,
    onPresshandler,
    setIsActive,
    selected,
    activeButtonFilter,
  };
};

export default useViewModel;
