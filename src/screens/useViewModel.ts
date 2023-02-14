import _ from 'lodash';
import { useState, useEffect } from 'react';

//TYPES
import type {
  FilterDataIn,
  FilterDataLoad,
  FilterDataOut,
  FilterDataModel,
} from 'src/types';

type Props = {
  dataIn: FilterDataIn;
  dataLoad: FilterDataLoad;
  dataOut: FilterDataOut;
};

const useViewModel = ({ dataLoad, dataOut, dataIn }: Props) => {
  //const [selected, setSelected] = useState<number[]>([]);
  //const [isActive, setIsActive] = useState<number[]>([1]);
  const [selectedItems, setSelectedItems] = useState<FilterDataLoad>([]);
  const [selectAll, setSelectAll] = useState({ dataLoad, selectAll: false });
  const [buttonList, setButtonList] = useState<FilterDataLoad>(dataLoad);
  const [single, setSingle] = useState({});
  let filteredData = dataLoad;

  const onPresshandler = ({ item }: any) => {
    showAllButton.map((selected: any) => {
      const newItems = selectAll.dataLoad.map(item => ({
        ...item,
        selected: !selectAll.selectAll,
      }));
      //if all is true and selected
      if (item.text === 'All') {
        const newData = filteredData.map(select => ({
          ...select,
          isSelected: !select.isSelected,
        }));
        console.log('newdata: ', newData);
        return newData;
      }
      //if multi is true
      else if (dataIn?.isMultiSelect) {
        if (selected.text === item.text) {
          setSelectedItems((prevState: any) => {
            if (prevState.includes(item)) {
              //console.log('prev: ', prevState);
              // if (selectedItems.length === selectAll.DataLoad.length) {
              //   setSelectAll({
              //     DataLoad: newItems,
              //     selectAll: !selectAll.selectAll,
              //   });
              // }
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
    //DataOut([...filteredData, item]);
  };

  const onAllButtonPress = () => {
    if (dataIn.isAllbuttonActive) {
      setButtonList(
        buttonList.map(select => ({
          ...select,
          isSelected: !select.isSelected,
        }))
      );
    }
  };

  const onSelectItem = (item: FilterDataModel) => {
    if (dataIn.isMultiSelect) {
      console.log('select: ', item);
      buttonList.map(select => {
        if (select.id === item.id) {
          return { ...select, isSelected: !select.isSelected };
        }
        return select;
      });
    }
  };

  const showAllButton = dataIn?.isAllbuttonActive
    ? [{ text: 'All', value: 'All', isSelected: true }, ...dataLoad]
    : dataLoad;

  return {
    showAllButton,
    onPresshandler,
    selectedItems,
    buttonList,
    selectAll,
    onSelectItem,
    onAllButtonPress,
    filteredData,
    single,
  };
};

export default useViewModel;
