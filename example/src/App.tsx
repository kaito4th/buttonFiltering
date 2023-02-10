import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text } from 'react-native';
import type { FilterDataLoad } from 'src/types';
import { FilterMAPP } from 'serino-mapp-filter-data';

export default function App() {
  const [filteredValues, setFilteredValues] = useState<FilterDataLoad>();
  const response = [
    {
      id: 1,
      brand: 'Google Market',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 3000,
      category: 'Market',
    },
    {
      id: 2,
      brand: 'Popeye',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 836,
      category: 'Eats',
    },
    {
      id: 3,
      brand: 'Retiro Pares',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 328,
      category: 'Eats',
    },
    {
      id: 4,
      brand: 'Amazon Market',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 6824,
      category: 'Market',
    },
    {
      id: 5,
      brand: 'Puregold',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 2138,
      category: 'Market',
    },
  ];

  const buttonFilterList = [
    {
      text: 'Grocery',
      value: 'Grocery',
    },
    {
      text: 'Shop',
      value: 'Shop',
    },
    {
      text: 'Markets',
      value: 'Markets',
    },
    {
      text: 'Eats',
      value: 'Eats',
    },
  ];

  const [dataOutData, setDataOutData] = useState<any>([]);
  const buttonData = (value: any) => {
    if (value.length == 0) {
      setDataOutData(new Array());
    } else if (value.length == 1) {
      setDataOutData([...dataOutData, value[0]]);
    } else {
      setDataOutData([value[0]]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <FilterMAPP
          dataIn={{
            isMultiSelect: true,
            isAllbuttonActive: true,
            inactiveButtonStyle: { backgroundColor: 'yellow' },
            activeButtonStyle: { backgroundColor: 'red' },
          }}
          dataLoad={buttonFilterList}
          dataOut={(value: any) => console.log('app: ', value)}
        />
      </View>
      <View>
        <FlatList
          data={response}
          renderItem={({ item }) => (
            <View>
              <Text>{item.brand}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
