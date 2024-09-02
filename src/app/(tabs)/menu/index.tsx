import { StyleSheet, Text, View, FlatList as List, ScrollView } from 'react-native';
import products from '@/assets/data/products';
import { ProductListItem } from '@/src/components/ProductListItem';
import { useColorScheme } from 'react-native';
import Colors from '@/src/constants/Colors';

export default function MenuScreen() {
  const colorScheme = useColorScheme()
  // console.log(products)
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background }}>
      <View style={styles.haveYouTried }>
    <Text style={{color: colorScheme === 'dark' ? Colors.dark.primaryText : Colors.light.primaryText,fontSize: 20,fontWeight: 700}} >Have you tried this</Text>
      </View>
      <List
        horizontal={true}
        data={products}
        renderItem={({ item }) => (
          <View style={styles.container} key={item.id}>
            <ProductListItem item={item} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        // scrollIndicatorInsets={0,0,0}
        keyExtractor={(item) => item.id.toString()} // Add a key extractor to ensure unique keys
        contentContainerStyle={[styles.parentLayout]} // Apply parent layout styling to FlatList's content
      // numColumns={3}
      // columnWrapperStyle={{ gap: 16 }}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parentLayout: {
    padding: 16,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  container: {
    maxWidth: 120,
    borderRadius: 8,
    padding: 6,
  },
  haveYouTried: {
    // width:"auto",
    marginTop: 10, 
    marginLeft: 16,
    borderLeftColor: "red", 
    borderLeftWidth: 4, 
    padding: 8, 
  }
});
