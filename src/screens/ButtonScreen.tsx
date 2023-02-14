import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
//OTHERS
import _ from 'lodash';
//TYPES
import type { FilterDataIn, FilterDataLoad, FilterDataOut } from 'src/types';
//MODEL
import useViewModel from './useViewModel';

type Props = {
  dataIn: FilterDataIn;
  dataLoad: FilterDataLoad;
  dataOut: FilterDataOut;
};

const ButtonScreen = ({ dataIn, dataLoad, dataOut }: Props) => {
  const { buttonList, onSelectItem, onAllButtonPress } = useViewModel({
    dataLoad,
    dataOut,
    dataIn,
  });

  const AllButtonValue = [
    {
      id: 1,
      text: 'All',
      value: 'All',
      isSelected: true,
    },
  ];
  console.log('filteredData: ', buttonList);

  const renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          //onAllButtonPress();
          onSelectItem(item);
          console.log('button: ', item.isSelected);
        }}
      >
        {item.isSelected ? (
          <View
            style={[
              item.text === 'All' && !dataIn.sameWidth ? { width: 75 } : {},
              dataIn.sameWidth ? { width: 75 } : {},
              styles.isActiveButtonStyle,
              dataIn.activeButtonStyle,
            ]}
          >
            <Text style={[styles.buttonTextStyle, dataIn.activeTextStyle]}>
              {item.text}
            </Text>
          </View>
        ) : (
          <View
            style={[
              item.text === 'All' && !dataIn.sameWidth ? { width: 75 } : {},
              dataIn.sameWidth ? { width: 75 } : {},
              styles.buttonStyle,
              [
                {
                  backgroundColor: 'transparent',
                },
              ],
              dataIn.inActiveButtonStyle,
            ]}
          >
            <Text style={[styles.buttonTextStyle, dataIn.inActiveTextStyle]}>
              {item.text}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        {dataIn.isAllbuttonActive
          ? AllButtonValue.map(buttonValue => (
              <TouchableOpacity
                key={buttonValue.id}
                onPress={() => {
                  onAllButtonPress();
                  //onSelectItem(buttonValue);
                }}
              >
                {buttonValue.isSelected === true ? (
                  <View
                    style={[
                      buttonValue.text === 'All' && !dataIn.sameWidth
                        ? { width: 75 }
                        : {},
                      dataIn.sameWidth ? { width: 75 } : {},
                      styles.isActiveButtonStyle,
                      dataIn.activeButtonStyle,
                    ]}
                  >
                    <Text
                      style={[styles.buttonTextStyle, dataIn.activeTextStyle]}
                    >
                      {buttonValue.text}
                    </Text>
                  </View>
                ) : (
                  <View
                    style={[
                      buttonValue.text === 'All' && !dataIn.sameWidth
                        ? { width: 75 }
                        : {},
                      dataIn.sameWidth ? { width: 75 } : {},
                      styles.buttonStyle,
                      [
                        {
                          backgroundColor: 'transparent',
                        },
                      ],
                      dataIn.inActiveButtonStyle,
                    ]}
                  >
                    <Text
                      style={[styles.buttonTextStyle, dataIn.inActiveTextStyle]}
                    >
                      {buttonValue.text}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            ))
          : null}

        <FlatList
          style={{
            marginBottom: 20,
          }}
          data={buttonList}
          renderItem={item => renderItem(item)}
          horizontal
        />
      </View>
    </>
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
