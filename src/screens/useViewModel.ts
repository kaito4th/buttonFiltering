import _, { filter } from 'lodash';
import { useState } from 'react';
import type { FilterDataIn, FilterDataLoad, FilterDataOut } from 'src/types';

type Props = {
  DataIn: FilterDataIn;
  DataLoad: FilterDataLoad;
  DataOut: FilterDataOut;
};

const useViewModel = ({ DataLoad, DataOut, DataIn }: Props) => {
  const [activeButtonFilter, setActiveButtonFilter] = useState<{
    text: string;
    value: string;
  }>({ text: 'All', value: 'All' });
  //const [selected, setSelected] = useState<number[]>([]);
  //const [isActive, setIsActive] = useState<number[]>([1]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [data, setData] = useState(DataLoad);
  const [selectAll, setSelectAll] = useState({ DataLoad, selectAll: false });
  console.log('count: ', selectedItems.length);

  const onPresshandler = ({ item, index }: any) => {
    const filteredButtons = showAllButton.map((selected: any) => {
      const newItems = selectAll.DataLoad.map(item => ({
        ...item,
        selected: !selectAll.selectAll,
      }));
      if (item.text === 'All') {
        setSelectAll({ DataLoad: newItems, selectAll: !selectAll.selectAll });
        console.log('state: ', selectAll);
        return { ...selected, isSelected: true };
      } else if (DataIn?.isMultiSelect) {
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
        console.log('else');
        if (selected.text !== item && selected.isSelected === true) {
          return { ...selected, isSelected: false };
        }
        if (selected.text === item) {
          return { ...selected, isSelected: !selected.isSelected };
        }
        return selected;
      }
    });
    setData(filteredButtons);
    console.log(item);
    DataOut([...selectedItems, item]);
    // if (item.text === 'All') {
    //   console.log('item: ', item.text);

    //   DataOut([]);
    // } else {
    //   setIsActive([index]);
    //   DataOut([item, index]);
    // }
  };

  const showAllButton = DataIn?.isAllbuttonActive
    ? [{ text: 'All', value: 'All', isSelected: false }, ...DataLoad]
    : DataLoad;

  return {
    setActiveButtonFilter,
    showAllButton,
    onPresshandler,
    selectedItems,
    activeButtonFilter,
    selectAll,
  };
};

export default useViewModel;
