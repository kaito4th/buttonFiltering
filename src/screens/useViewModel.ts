import _ from 'lodash';
import { useState } from 'react';

//TYPES
import type { FilterDataIn, FilterDataLoad, FilterDataOut } from 'src/types';

type Props = {
  DataIn: FilterDataIn;
  DataLoad: FilterDataLoad;
  DataOut: FilterDataOut;
};

const useViewModel = ({ DataLoad, DataOut, DataIn }: Props) => {
  //const [selected, setSelected] = useState<number[]>([]);
  //const [isActive, setIsActive] = useState<number[]>([1]);
  const [selectedItems, setSelectedItems] = useState<FilterDataLoad>([]);
  const [selectAll, setSelectAll] = useState({ DataLoad, selectAll: false });
  const [single, setSingle] = useState({});

  const onPresshandler = ({ item }: any) => {
    showAllButton.map((selected: any) => {
      const newItems = selectAll.DataLoad.map(item => ({
        ...item,
        selected: !selectAll.selectAll,
      }));
      //if all is true and selected
      if (item.text === 'All') {
        setSelectAll({ DataLoad: newItems, selectAll: !selectAll.selectAll });
        console.log('state: ', selectAll);
        return { ...selected, isSelected: true };
      }
      //if multi is true
      else if (DataIn?.isMultiSelect) {
        if (selected.text === item.text) {
          setSelectedItems((prevState: any) => {
            if (prevState.includes(item)) {
              //console.log('prev: ', prevState);
              if (selectedItems.length === selectAll.DataLoad.length) {
                setSelectAll({
                  DataLoad: newItems,
                  selectAll: !selectAll.selectAll,
                });
              }
              return prevState.filter((i: any) => i !== item);
            }
            return [...prevState, item];
          });
          return { ...selected, isSelected: !selected.isSelected };
        }
        return selected;
      } else {
        //if multi is false
        if (selected === item) {
          setSingle(item);
        }
        return selected;
      }
    });
    //console.log(single);
    DataOut([...selectedItems, item]);
  };

  const showAllButton = DataIn?.isAllbuttonActive
    ? [{ text: 'All', value: 'All', isSelected: false }, ...DataLoad]
    : DataLoad;

  return {
    showAllButton,
    onPresshandler,
    selectedItems,
    selectAll,
    single,
  };
};

export default useViewModel;
