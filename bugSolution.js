```javascript
import React, { useMemo, useCallback } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i * 2 }));

const Item = React.memo(({ item }) => {
  return (
    <View style={styles.item}>
      <Text>{item.value}</Text>
    </View>
  );
});

const App = () => {
  const getItemLayout = useCallback((data, index) => ({
    length: 50,
    offset: 50 * index,
    index,
  }), []);

  const renderItem = useCallback(({ item }) => (
    <Item item={item} />
  ), []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      getItemLayout={getItemLayout}
      windowSize={21}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
```