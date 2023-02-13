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
  const { onPresshandler, showAllButton, selectedItems, selectAll } =
    useViewModel({
      DataLoad,
      DataOut,
      DataIn,
    });

  useEffect(() => {}, []);

  // const onPressHandler = (btn: any) => {
  //   if (DataIn.isMultiSelect == true) {
  //     setActiveButtonFilter(btn), handleMultiSelect(btn), console.log(btn);
  //   } else {
  //     setActiveButtonFilter(btn);
  //   }
  // };
  // const onMultiHandler = (item: any) => {
  //   DataLoad.map((value: any) => {
  //     console.log('value', value.text);
  //     if (DataIn.isMultiSelect === true) {
  //       if (value.text === item) {
  //         console.log('here: ', item);
  //         return { ...value, isSelected: !value.isSelected };
  //       }
  //       return value;
  //     }
  //   });
  // };

  const renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPresshandler({ item, index });
          //onMultiHandler(item);
        }}
      >
        {selectedItems.includes(item) ||
        selectAll.selectAll ||
        item.isSelected == true ? (
          <View
            style={[
              item.text === 'All' && !DataIn.sameWidth ? { width: 75 } : {},
              DataIn.sameWidth ? { width: 75 } : {},
              styles.isActiveButtonStyle,
              DataIn.activeButtonStyle,
            ]}
          >
            <Text style={[styles.buttonTextStyle, DataIn.textStyleProp]}>
              {item.text}
            </Text>
          </View>
        ) : (
          <View
            style={[
              item.text === 'All' && !DataIn.sameWidth ? { width: 75 } : {},
              DataIn.sameWidth ? { width: 75 } : {},
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
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#F69065',
  },
  isInactiveButtonStyle: {
    backgroundColor: 'transparent',
  },
});

export default ButtonScreen;
