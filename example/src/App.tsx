import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

//ROOT
import { FilterMAPP } from 'serino-mapp-filter-data';

export default function App() {
  const buttonFilterList = [
    {
      text: 'Grocery',
      value: 'Grocery',
      isSelected: false,
    },
    {
      text: 'Shop',
      value: 'Shop',
      isSelected: false,
    },
    {
      text: 'Markets',
      value: 'Markets',
      isSelected: false,
    },
    {
      text: 'Eats',
      value: 'Eats',
      isSelected: false,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <FilterMAPP
          dataIn={{
            isMultiSelect: true,
            isAllbuttonActive: true,
            sameWidth: true,
            inActiveButtonStyle: {
              backgroundColor: 'lightgray',
              borderColor: 'lightgray',
              justifyContent: 'center',
            },
            activeButtonStyle: {
              backgroundColor: 'orange',
              borderColor: 'orange',
              height: 40,
              justifyContent: 'center',
            },
            activeTextStyle: { color: 'white', textAlign: 'center' },
            inActiveTextStyle: {
              textAlign: 'center',
              justifyContent: 'center',
              color: 'white',
            },
          }}
          dataLoad={buttonFilterList}
          dataOut={(value: any) => console.log('app: ', value)}
        />
      </View>
      {/* <View>
        <FlatList
          data={response}
          renderItem={({ item }) => (
            <View>
              <Text>{item.brand}</Text>
            </View>
          )}
        />
      </View> */}
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
