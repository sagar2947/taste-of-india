import { StyleSheet, View, FlatList as List } from 'react-native';
import products from '@/assets/data/products';
import { ProductListItem } from '@/src/components/ProductListItem';

export default function MenuScreen() {

  console.log(products)
  return (
    <List
      // horizontal={true}
      data={products}
      renderItem={({ item }) => (
        <View style={styles.container} key={item.id}>
          <ProductListItem item={item} />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()} // Add a key extractor to ensure unique keys
      contentContainerStyle={styles.parentLayout} // Apply parent layout styling to FlatList's content
      numColumns={2}
      columnWrapperStyle={{ gap: 16 }}
    />);
}

const styles = StyleSheet.create({
  parentLayout: {
    padding: 16,
    gap: 16,
    justifyContent: 'center'

  },
  container: {
    flex: 1,
    maxWidth: '50%',
    borderColor: "#ff0000",
    borderRadius: 16,
    padding: 16,
    backgroundColor: "white"
  }
});
