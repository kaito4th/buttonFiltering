import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import _ from 'lodash';
//TYPES
import type { FilterDataIn, FilterDataLoad, FilterDataOut } from 'src/types';

import useViewModel from './useViewModel';

type Props = {
  DataIn: FilterDataIn;
  DataLoad: FilterDataLoad;
  DataOut: FilterDataOut;
};

const ButtonScreen = ({ DataIn, DataLoad, DataOut }: Props) => {
  const { onPresshandler, isActive, setIsActive, selected } = useViewModel({
    DataLoad,
    DataOut,
  });

  // useEffect(() => {
  //   onSelectEatsFilter(),
  //     onSelectMarketsFilter(),
  //     onSelectAllFilter(),
  //     onFilterMarketList();
  // }, []);

  // const onPressHandler = (btn: any) => {
  //   if (DataIn.isMultiSelect == true) {
  //     setActiveButtonFilter(btn), handleMultiSelect(btn), console.log(btn);
  //   } else {
  //     setActiveButtonFilter(btn);
  //   }
  // };
  const onMultiHandler = ({ item, index }: any) => {
    if (DataIn?.isMultiSelect == true) {
      console.log('spread: ', [...isActive, index]);
      setIsActive([...isActive, index]);
      //DataOut([item]);
    }
    if (isActive.includes(index)) {
      setIsActive(isActive.filter(i => i !== index));
    }
  };

  const showAllButton = DataIn?.isAllbuttonActive
    ? [{ text: 'All', value: 'All' }, ...DataLoad]
    : DataLoad;

  const renderItem = ({ item, index }: any) => {
    console.log('index: ', index);
    return (
      <TouchableOpacity
        onPress={() => {
          onPresshandler({ item, index });
          onMultiHandler(index);
        }}
      >
        {!isActive.includes(index) ? (
          <View
            style={[
              styles.buttonStyle,
              [
                {
                  backgroundColor: 'transparent',
                },
              ],
              DataIn.inactiveButtonStyle,
            ]}
          >
            <Text style={[styles.buttonTextStyle, DataIn.textStyleProp]}>
              {item.text}
            </Text>
          </View>
        ) : (
          <View style={[styles.buttonStyle, DataIn.activeButtonStyle]}>
            <Text style={[styles.buttonTextStyle, DataIn.textStyleProp]}>
              {item.text}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={{
        marginBottom: 20,
      }}
      data={showAllButton}
      renderItem={item => renderItem(item)}
      horizontal
    />
  );
};
// isActive.includes(index) ? '#F69065' : 'white',

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  buttonTextStyle: {
    lineHeight: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  isActiveButtonStyle: {
    backgroundColor: '#F69065',
  },
  isInactiveButtonStyle: {
    backgroundColor: 'transparent',
  },
});

export default ButtonScreen;
